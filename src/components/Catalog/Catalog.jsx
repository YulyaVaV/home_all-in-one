import React from 'react';

import './Catalog.scss';
import Card from './component/Card';
import { card } from './card.jsx';

export const Catalog = () => {
  return (
    <div className="catalog">
      <p className="catalog__title">Рекомендации для вас</p>
      <div className="catalog__wrapp">
        {
          card.map(item => (
            <Card
              img={item.img}
              price={item.price}
              name={item.name}
              place={item.place}
              square={item.square}
              color={item.color}
              pricebefore={item.pricebefore}
              linethrough={item.linethrough}
              nophotosvg={item.nophotosvg}
              text={item.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Catalog