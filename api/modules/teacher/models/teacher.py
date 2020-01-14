from main import db

from sqlalchemy.dialects.postgresql import ARRAY

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
