import React from 'react';

const NotFound = () => {
    //setting the styles for the not found component
    const iconStyles = {
        fontSize: '165px',
        color: 'red',
        margin: '0 auto'
    };
    const divStyles = {
        margin: '0 auto'
    };
    return (
        <div className="not-found-page" style={divStyles}>
            <i className="material-icons" style={iconStyles}>report </i>
            <p>I am sorry that page is unavailable please try again.</p>
        </div>
    )
};

export default NotFound;
