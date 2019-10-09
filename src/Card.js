import React from 'react';

const Card = ({name}) => {
    const src = `/cards/${name}.png`
    return <div><img src={src} /></div>;
};

export default Card;
