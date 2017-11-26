import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client';
import {connect} from 'react-redux'
import {addReview} from './actions/GotReview'
import {addPoint} from './actions/PlotData'
import ReviewList from './components/ReviewList'
import ReviewChart from './components/ReviewChart'

const mapStateToProps = (state = {}) => {
    return {...state};
};

class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        const socket = openSocket('http://localhost:5000/reviews', {forceNew: true});
        socket.on('review', function(review) {
            dispatch(addReview(review))
            dispatch(addPoint(review))
            // get another
            socket.emit('produce')
        });
        socket.emit('produce');
    }
  render() {
      const {dispatch, reviews, plotData} = this.props
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
              </header>
              <div className="reviews-table">
                  <ReviewList reviews={reviews.slice(Math.max(reviews.length - 5, 0))} />
              </div>
              <div className="reviews-graphs">
                  <ReviewChart plotData={plotData} userd3={true}/>
              </div>
          </div>
       );
    }
}

export default connect(mapStateToProps)(App);
