from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from api.config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from api import routes
