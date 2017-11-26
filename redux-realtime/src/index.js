import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reviews from './reducers/ReviewsReducer'
import plotData from './reducers/PlotDataReducer'
import { createStore, combineReducers } from 'redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({reviews, plotData}), { reviews: [], plotData: [] });
ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
