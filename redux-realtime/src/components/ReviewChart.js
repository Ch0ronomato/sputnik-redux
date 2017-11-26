import React from 'react'
import PropTypes from 'prop-types'
import RD3SimpleLine from './RD3SimpleLine'

const ReviewChart = ({ plotData = [], userd3 = true }) => {
    if (plotData.length == 0) {
        return <h1>No data yet</h1>
    }
    else if (userd3) {
        return <RD3SimpleLine
            rd3data = {plotData}
            userd3 = {true}
        />
    } else {
        return <h1>No chart lib selected. Sorry :(</h1>
    }
}

ReviewChart.propTypes = {
    plotData: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
    ),
    userd3: PropTypes.bool.isRequired
}

export default ReviewChart
