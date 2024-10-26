import React from 'react';
const Alert = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Alert;
