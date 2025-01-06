from flask import Flask, request, jsonify, redirect, url_for, flash, session
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import os
from dotenv import load_dotenv
import uuid
from flask_cors import CORS
from datetime import datetime
from flask_session import Session

class FlaskApp:
    def __init__(self):
        app = Flask(__name__)
        CORS(app)  # 특정 도메인만 허용
        self.app = app
        self.app.secret_key = secrets.token_hex(32)  # 랜덤 Secret Key
        self.load_environment_variables()
        self.configure_database()
        self.mysql = MySQL(self.app)
        self.tables_initialized = False
        self.register_routes()
        self.initialize_hooks()
        self.configure_session()

    def load_environment_variables(self):
        load_dotenv()  # .env 파일 로드
        required_vars = ['MYSQL_HOST', 'MYSQL_PORT', 'MYSQL_USER', 'MYSQL_PASSWORD', 'MYSQL_DB']
        missing_vars = [var for var in required_vars if not os.getenv(var)]

        if missing_vars:
            print(f"다음 환경 변수가 설정되지 않았습니다: {', '.join(missing_vars)}")
            print("환경 변수를 .env 파일에 추가하거나 시스템 환경 변수로 설정해주세요.")
            exit(1)  # 프로그램 종료

        # 디버그 용도로 환경 변수 출력
        print("환경 변수 상태:")
        for var in required_vars:
            value = os.getenv(var)
            # 비밀번호나 민감한 정보는 출력하지 않음
            if var == 'MYSQL_PASSWORD':
                print(f"{var}: {'*' * 8}")
            else:
                print(f"{var}: {value}")

    def configure_database(self):
        self.app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
        self.app.config['MYSQL_PORT'] = int(os.getenv('MYSQL_PORT'))
        self.app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
        self.app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
        self.app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

    def configure_session(self):
        self.app.config['SESSION_TYPE'] = 'filesystem'  # 세션 저장 방식
        Session(self.app)  # 세션 설정

    def create_tables(self):
        table_creation_query = """
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id CHAR(36) NOT NULL UNIQUE,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            age VARCHAR(50) NOT NULL,
            country VARCHAR(10) DEFAULT 'US',
            create_date DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        """
        try:
            cur = self.mysql.connection.cursor()
            cur.execute(table_creation_query)
            self.mysql.connection.commit()
            cur.close()
            print("테이블이 성공적으로 확인 또는 생성되었습니다.")
        except Exception as e:
            print(f"테이블 생성 중 오류 발생: {e}")

    def initialize_hooks(self):
        @self.app.before_request
        def initialize_database():
            if not self.tables_initialized:
                self.create_tables()
                self.tables_initialized = True

    def execute_query(self, query, params=(), fetch_one=False):
        """데이터베이스 쿼리 실행 Helper 함수"""
        try:
            cur = self.mysql.connection.cursor()
            cur.execute(query, params)
            result = cur.fetchone() if fetch_one else cur.fetchall()
            self.mysql.connection.commit()
            cur.close()
            return result
        except Exception as e:
            print(f"Database query error: {e}")
            return None

    def register_routes(self):
        app = self.app

        @app.route('/')
        def home():
            return 'Home Page'

        @app.route('/register', methods=['POST'])
        def register():
            try:
                data = request.get_json()
                username = data.get('username')
                password = data.get('password')
                age = data.get('age')
                country = data.get('country')

                if not username or not password or not age or not country:
                    return jsonify({"success": False, "message": "모든 필드를 입력해야 합니다."}), 400

                # 사용자 이름이 이미 존재하는지 확인
                existing_user_query = "SELECT * FROM users WHERE username = %s"
                existing_user = self.execute_query(existing_user_query, (username,), fetch_one=True)

                if existing_user:
                    return jsonify({"success": False, "message": "이미 존재하는 사용자 이름입니다."}), 409

                hashed_password = generate_password_hash(password)
                user_id = str(uuid.uuid4())

                query = """
                INSERT INTO users (user_id, username, password, country, age) 
                VALUES (%s, %s, %s, %s, %s)
                """
                params = (user_id, username, hashed_password, country, age)
                self.execute_query(query, params)

                return jsonify({"success": True, "message": "회원가입이 완료되었습니다."}), 201
            except Exception as e:
                print(f"Register error: {e}")
                return jsonify({"success": False, "message": "서버 오류 발생"}), 500

        @app.route('/login', methods=['POST'])
        def login():
            try:
                data = request.get_json()
                username = data.get('username')
                password = data.get('password')

                if not username or not password:
                    return jsonify({"success": False, "message": "Username과 Password를 모두 입력해야 합니다."}), 400

                query = "SELECT user_id, username, password FROM users WHERE username = %s"
                user = self.execute_query(query, (username,), fetch_one=True)

                if user and check_password_hash(user[2], password):
                    session['user_id'] = user[0]
                    return jsonify({"success": True, "message": "로그인 성공!"}), 200
                else:
                    return jsonify({"success": False, "message": "로그인 실패"}), 401
            except Exception as e:
                print(f"Login error: {e}")
                return jsonify({"success": False, "message": "서버 오류 발생"}), 500

        @app.route('/user_list', methods=['GET'])
        def user_list():
            try:
                query = "SELECT user_id, username, country, age, create_date FROM users"
                users = self.execute_query(query)

                # DATETIME 포맷 변환
                users = [{"user_id": user[0], "username": user[1], "country": user[2], "age": user[3], 
                          "create_date": user[4].strftime("%Y-%m-%d %H:%M:%S")} for user in users]

                return jsonify({"success": True, "users": users}), 200
            except Exception as e:
                print(f"User list error: {e}")
                return jsonify({"success": False, "message": "서버 오류 발생"}), 500

        @app.route('/delete_user/<user_id>', methods=['DELETE'])
        def delete_user(user_id):
            try:
                query = "DELETE FROM users WHERE user_id = %s"
                self.execute_query(query, (user_id,))
                return jsonify({"success": True, "message": "사용자가 성공적으로 삭제되었습니다."}), 200
            except Exception as e:
                print(f"Delete user error: {e}")
                return jsonify({"success": False, "message": "서버 오류 발생"}), 500

    def run(self):
        self.app.run(debug=True)


if __name__ == '__main__':
    app = FlaskApp()
    app.run()
