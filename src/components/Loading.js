import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <ReactLoading type={'bubbles'} color={'blue'} height={'700px'} width={'400px'}/>
);

export default Loading;