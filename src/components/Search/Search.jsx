import React from 'react';

import './Search.scss';
import arrow from '../../images/arrow-bottom.svg';
import glass from '../../images/search-gray.svg';

export const Search = () => {
  return (
    <div className="search">
      <div className="search__wrapp">
        <input type="text" placeholder="Поиск по недвижимости..." className="search__input"/>
        <svg className="search__glass">
          <use xlinkHref={glass + "#search-gray"}/>
        </svg>
      </div>
      
      <div className="search__select">
        <p className="search__category">Любая категория</p>
        <svg className="search__arrow">
          <use xlinkHref={arrow + "#arrow-bottom"}/>
        </svg>
      </div>
      <a href='/' className="search__button">Найти</a>
    </div>
  )
}

export default Search