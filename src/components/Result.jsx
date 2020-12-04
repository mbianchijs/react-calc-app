import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ resultado }) => (
    <div className="result">
        <span>{ resultado }</span>
    </div>
)


Result.propTypes = {
    resultado: PropTypes.string.isRequired
}

Result.defaultProps = {
    resultado: "500"
}

export default Result