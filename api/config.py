import os
from api.credentials import DATABASE_URL, SECRET_KEY

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = SECRET_KEY
    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
