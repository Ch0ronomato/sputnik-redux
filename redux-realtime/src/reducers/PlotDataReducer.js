import {ADD_POINT} from '../actions/PlotData'

function plotDataReducer(state = [], action) {
    switch(action.type) {
        case ADD_POINT:
            return [
                ...state,
                {
                    x: state.length + 1,
                    y: action.review.rating
                }
            ];
        default:
            return state
    }
}

export default plotDataReducer
