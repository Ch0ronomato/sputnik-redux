import time
import eventlet
from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from sputnik import StaffReview
reviews = StaffReview()
current_page_index = 1
current_page = reviews.getPageOfReviews(current_page_index)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app)
socketio = SocketIO(app)

@socketio.on('produce', namespace='/reviews')
def on_produce():
    emit('review', get_next_review().serialize(), namespace='/reviews')
    time.sleep(2)

def get_next_review():
    global current_page
    global current_page_index
    try:
        review = next(current_page)
        return review
    except StopIteration:
        current_page_index = current_page_index + 1
        current_page = reviews.getPageOfReviews(current_page_index)
        review = next(current_page)
        return review
if __name__ == '__main__':
    socketio.run(app)
