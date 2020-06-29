import React from 'react';

const Error = ({ messageError }) => {
    return (
        <p className="alert alert-danger error">{messageError}</p>
    );
}
 
export default Error;