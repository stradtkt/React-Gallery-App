import React from 'react';


const Photos = ({src,id}) => {
    return (
        <li>
            <img src={src} key={id} alt="Flicker Photos"/>
        </li>
    );
}

export default Photos;