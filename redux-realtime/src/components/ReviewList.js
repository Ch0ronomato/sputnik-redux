import React from 'react'
import PropTypes from 'prop-types'
import Review from './Review'

const ReviewList = ({ reviews=[] }) => (
    <table>
            <tbody>
                <tr>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
            {
                reviews.slice(0).reverse().map((review, index) => (
                    <Review key={index} {...review} />
                ))
            }
        </tbody>
    </table>
)

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default ReviewList;
