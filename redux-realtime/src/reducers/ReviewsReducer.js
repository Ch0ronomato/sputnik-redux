import {GOT_REVIEW} from '../actions/GotReview'

function reviews(state = [], action) {
    switch(action.type) {
        case GOT_REVIEW:
            return [
                    ...(state),
                    action.review
                ]
        default:
            return state;
    }
}

export default reviews
