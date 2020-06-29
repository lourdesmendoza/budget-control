import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ messageError }) => {
    return (
        <p className="alert alert-danger error">{messageError}</p>
    );
}

Error.propTypes = {
    messageError: PropTypes.string.isRequired
}
 
export default Error;