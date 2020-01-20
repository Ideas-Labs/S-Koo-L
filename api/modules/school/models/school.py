from main import db

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
