from flask import jsonify
from main import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.Text)
    password = db.Column(db.Text)
    courses = db.relationship('Course', backref = 'user')

    def __repr__(self):
        return '''<ID %r,
                Username %r,
                Password %r,
                Courses %r''' % (self.id, self.username, self.password, self.courses)

class Course(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.Text, unique = True)
    semester = db.Column(db.Integer)
    time_spent_studying = db.Column(db.Integer)
    events = db.relationship('Event', backref = 'course')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    @property
    def serialize(self):
       return {
           'id' : self.id,
           'title': self.title,
           'semester': self.semester,
           'time_spent_studying': self.time_spent_studying,
           #'events': [e.serialize() for e in self.events]
       }

    def __repr__(self):
        return '''
                ID %d,
                Title %r,
                Semseter %r,
                Time_Spent_Studying %r,
                UserID %r,
                Events %r
                ''' % (self.id, self.title, self.semester, self.time_spent_studying, self.user_id, 'self.events')

class Event(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    start = db.Column(db.DateTime)
    end = db.Column(db.DateTime)
    eventType = db.Column(db.Text)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))

    @property
    def serialize(self):
       return {
           'id' : self.id,
            'start': self.start,
            'end': self.end,
            'eventType': self.eventType,
       }

    def __repr__(self):
        return '''
                ID %r,
                Start %r,
                End %r,
                EventType %r,
                CourseID %r
                ''' % (self.id, self.start, self.end, self.eventType, self.course_id)