import flats from '../../images/flats.svg';
import houses from '../../images/houses.svg';
import map from '../../images/map.svg';
import mortgage from '../../images/mortgage.svg';
import rent from '../../images/rent.svg';

import './Categories.scss';

export const categories = [{
    img:
    <svg className="">
      <use xlinkHref={flats + "#flats"}/>
    </svg>,
    title:'Квартиры',
  },
  {
    img:
    <svg className="">
      <use xlinkHref={houses + "#houses"}/>
    </svg>,
    title:'Дома',
  },
  {
    img:
    <svg className="">
      <use xlinkHref={map + "#map"}/>
    </svg>,
    title:'Участки',
  },
  {
    img:
    <svg className="">
      <use xlinkHref={mortgage + "#mortgage"}/>
    </svg>,
    title:'Коммерция',
  },
  {
    img:
    <svg className="">
      <use xlinkHref={rent + "#rent"}/>
    </svg>,
    title:'Аренда',
  },
  ]
  