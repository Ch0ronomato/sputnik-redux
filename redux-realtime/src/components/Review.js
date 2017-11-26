import React from 'react'
import PropTypes from 'prop-types'

const Review = ({ artist, album, rating, link }) => (
    <tr>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{rating}</td>
        <td><a href={link}>Full review</a></td>
    </tr>
)

Review.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired
}

export default Review;
