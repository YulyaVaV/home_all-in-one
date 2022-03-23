import React, { useState } from 'react';

import './Card.scss';

import like from '../../../images/like.png';
import liked from '../../../images/liked.png'

export const Card = ({img, price, name, place, square, color, pricebefore, linethrough, nophotosvg, text}) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="card">
      <div className="card__photo-wrapp">
        <img src={img} alt="" className="card__img"/>
        <div className="card__img-no-photo">
          <svg className="card__img-no">{nophotosvg}</svg>
          <p className="card__img-no-photo-text">{text}</p>
        </div>
      </div>
      
      <div className="card__wrapp">
        <div className="card__line-like">
          <div className="card__prices">
            <p className="card__price" style={color}>{price}</p>
            <p className="card__price" style={linethrough}>{pricebefore}</p>
          </div>
          <img
            onClick={() => setIsSaved(prev => !prev)}
            className='card__click-like'
            src={isSaved ? liked : like}
            alt=''
          />
        </div>

        <p className="card__name">{name}</p>
        <a href="/" className="card__place">{place}</a>
        <p className="card__square">{square}</p>
      </div>
    </div>
  )
}

export default Card