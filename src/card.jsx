import React from 'react';

import './card.css'

export default function Card ({id, name, type, link, image})  {
    return (
      <div className="CardWrapper" onClick={()=>window.open(link)}>
        <div className="ColImg">
          <img className="Img" src={image} />
        </div>
        <div className="ColDetail">
          <div className="Header">
            <div className="BookTitle">{name}</div>
          </div>
        </div>
      </div>
    );
  };