from main import db
from models import *
import datetime

def make():
	db.create_all()

def test():
	date1 = datetime.datetime(2015, 12, 11, 12, 50)
	date2 = datetime.datetime(2015, 12, 11, 13, 00)
	event = Event(start = date1, end = date2, eventType = "Lab")
	ml_course = Course(title = 'Biology', semester = 2, time_spent_studying = 100, events = [event])
	user = User(username = "Peter", password = "fu8as8e", courses = [ml_course])
	db.session.add(ml_course)
	db.session.add(event)
	db.session.add(user)
	db.session.commit()

def clear():
	Course.query.delete()
	Event.query.delete()
	User.query.delete()
	db.session.commit()

def print_all():
	print Course.query.all()
	print Event.query.all()
	print User.query.all()