from sqlalchemy.dialects.postgresql import ARRAY
from api import db

class Admin(db.Model):
    __tablename__ = "admin"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String,
        nullable=False
    )

    email = db.Column(
        db.String,
        nullable=False
    )

    password = db.Column(
        db.String,
        nullable=False
    )


class School(db.Model):
    __tablename__ = "school"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String,
        nullable=False
    )

    address = db.Column(
        db.String,
        nullable=False
    )

    affiliation = db.Column(
        db.String,
        nullable=False
    )


class Subject(db.Model):
    __tablename__ = "subject"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String(32),
        nullable=False,
        unique=True
    )


class Teacher(db.Model):
    __tablename__ = "teacher"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    name = db.Column(
        db.String,
        nullable=False
    )

    email = db.Column(
        db.String,
        nullable=False
    )

    teacher_subject = db.Column(
        ARRAY(db.String),
        nullable=False,
        default=[]
    )

    teacher_standard = db.Column(
        ARRAY(db.String),
        nullable=False,
        default=[]
    )
