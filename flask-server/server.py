from flask import Flask, request
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import uuid

class FlaskApp:
    def __init__(self):
        self.app = Flask(__name__)
        self.app.secret_key = secrets.token_hex(32)
        self.load_environment_variables()
        self.configure_database()
        self.mysql = MySQL(self.app)
        self.tables_initialized = False
        self.register_routes()

    def load_environment_variables(self):
        # 환경 변수를 로드하거나 기본값 설정
        self.app.config['MYSQL_HOST'] = 'localhost'
        self.app.config['MYSQL_USER'] = 'root'
        self.app.config['MYSQL_PASSWORD'] = 'password'
        self.app.config['MYSQL_DB'] = 'example_db'

    def configure_database(self):
        # MySQL 연결 설정
        self.app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

    def register_routes(self):
        """라우트 등록"""
        app = self.app

        @app.route('/api/register', methods=['POST'])
        def api_register():
            data = request.json
            username = data.get('username')
            password = data.get('password')
            country = data.get('country')
            hashed_password = generate_password_hash(password)
            user_id = str(uuid.uuid4())

            try:
                cur = self.mysql.connection.cursor()
                cur.execute(
                    "INSERT INTO users (user_id, username, password, country) VALUES (%s, %s, %s, %s)",
                    (user_id, username, hashed_password, country),
                )
                self.mysql.connection.commit()
                cur.close()
                return {"message": "회원가입이 완료되었습니다."}, 201
            except Exception as e:
                print(f"회원가입 중 오류: {e}")
                return {"error": "회원가입 실패. 사용자 이름이 이미 존재하거나 오류가 발생했습니다."}, 400

        @app.route('/api/login', methods=['POST'])
        def api_login():
            data = request.json
            username = data.get('username')
            password = data.get('password')

            cur = self.mysql.connection.cursor()
            cur.execute("SELECT * FROM users WHERE username = %s", [username])
            user = cur.fetchone()
            cur.close()

            if user and check_password_hash(user['password'], password):
                return {"message": "로그인 성공", "username": user['username']}, 200
            else:
                return {"error": "로그인 실패. 사용자 이름 또는 비밀번호가 잘못되었습니다."}, 401

    def run(self):
        self.app.run(debug=True)

if __name__ == '__main__':
    app = FlaskApp()
    app.run()
