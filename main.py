import sqlite3
import datetime
from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash, jsonify
from flask.ext.sqlalchemy import SQLAlchemy
from contextlib import closing

app = Flask('project-sannella')
app.config.from_pyfile('.config.cfg')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

#Import models after db is created
from models import *


@app.route('/')
def show_courses():
    courses = Course.query.all()
    return jsonify(courses=[i.serialize for i in courses])

@app.route('/<course_id>/')
def show_specific_course(course_id):
    course = Course.query.filter_by(id=course_id).first_or_404()
    return jsonify(course=course.serialize)

@app.route('/<course_id>/', methods=['POST'])
def add_course(course_id):
    return request.method

@app.route('/<course_id>/events')
def show_week_events(course_id):
    events = Event.query.filter_by(course_id=course_id, )
    return jsonify(json_list=[i.serialize for i in events])


@app.route('/<course_id>/events/<event_id>')
def show_specific_event(course_id, event_id):
    event = Course.query.filter_by(id=event_id).first_or_404()
    return jsonify(event.serialize)

'''
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != app.config['USERNAME']:
            error = 'Invalid username'
        elif request.form['password'] != app.config['PASSWORD']:
            error = 'Invalid password'
        else:
            session['logged_in'] = True
            flash('You were logged in')
            return redirect(url_for('show_courses'))
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    flash('You were logged out')
    return redirect(url_for('show_courses'))
'''

if __name__ == '__main__':
    app.run()

