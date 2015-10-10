from flask import jsonify, app
from models import Course, Event

@app.route('/')
def show_courses():
    courses = Course.query.all()
    return jsonify(courses=[i.serialize for i in courses])

@app.route('/<course_id>/')
def show_specific_course(course_id):
    course = Course.query.filter_by(id=course_id).first_or_404()
    return jsonify(course=course.serialize)


@app.route('/<course_id>/events')
def show_events(course_id):
    events = Event.query.filter_by(course_id=course_id)
    return jsonify(json_list=[i.serialize for i in events])


@app.route('/<course_id>/events/<event_id>')
def show_specific_event(course_id, event_id):
    event = Course.query.filter_by(id=event_id)
    return jsonify(event)