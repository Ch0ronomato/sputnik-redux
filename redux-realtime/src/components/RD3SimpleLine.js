import React from 'react'
import PropTypes from 'prop-types'
import rd3 from 'rd3'
const LineChart = rd3.LineChart;

const RD3SimpleLine = ({ rd3data = []}) => (
    <LineChart
        data={[
            {
                name: 'Ratings data',
                values: rd3data,
                strokeWidth: 3,
                strokeDashArray: "5.5"
            }
        ]}
        width="100%"
        height={400}
        yAxisLabel="Scores"
        xAxisLabel="Time"
        viewBoxObject={{
            x: 0,
            y: 0,
            width: 800,
            height: 400
        }}
        domain={{y: [0.0,5.0], x: [1,]}}
    />
)


RD3SimpleLine.propTypes = {
    rd3data: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        })
    )
}

export default RD3SimpleLine
