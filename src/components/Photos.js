import React from 'react';


const Photos = props => {
    return (
        <li>
            <img title={props.title} src={props.url} key={props.id} alt="Flicker Photos"/>
        </li>
    );
};

export default Photos;