from main import db

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