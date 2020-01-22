import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField, SQLAlchemyObjectType
from api.models import Admin as AdminModel, Subject as SubjectModel
from api import db

class Admin(SQLAlchemyObjectType):
    class Meta:
        model = AdminModel
        interfaces = (relay.Node, )


class CreateAdminInput(graphene.InputObjectType):
    token = graphene.String(required=True)


class CreateAdmin(graphene.Mutation):
    class Arguments:
        admin_data = CreateAdminInput(required=True)
    admin = graphene.Field(Admin)

    @staticmethod
    def mutate(description, info, admin_data=None):
        admin = AdminModel(**admin_data)
        db.session.add(admin)
        db.session.commit()
        return CreateAdmin(admin=admin)


class Subject(SQLAlchemyObjectType):
    class Meta:
        model = SubjectModel
        interfaces = (relay.Node, )


class CreateSubjectInput(graphene.InputObjectType):
    name = graphene.String(required=True)


class CreateSubject(graphene.Mutation):
    class Arguments:
        subject_data = CreateSubjectInput(required=True)
    subject = graphene.Field(Subject)

    @staticmethod
    def mutate(description, info, subject_data=None):
        subject = SubjectModel(**subject_data)
        db.session.add(subject)
        db.session.commit()
        return CreateSubject(subject=subject)


class Viewer(graphene.ObjectType):
    all_admins = SQLAlchemyConnectionField(Admin, sort=Admin.sort_argument())
    all_subjects = SQLAlchemyConnectionField(Subject, sort=Subject.sort_argument())


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    viewer = graphene.Field(Viewer)

    def resolve_viewer(self, info):
        return not None # none of Viewer's resolvers need Viewer()


class MyMutation(graphene.ObjectType):
    create_admin = CreateAdmin.Field()
    create_subject = CreateSubject.Field()

schema = graphene.Schema(query=Query, mutation=MyMutation, types=[Admin, Subject])
