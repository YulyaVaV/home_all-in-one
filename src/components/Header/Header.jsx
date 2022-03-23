import React from 'react';

import './Header.scss';
import Titles from './component/Titles.jsx';
import add from '../../images/carbon_add-alt.svg';
import bell from '../../images/bell.svg';
import like from '../../images/like.svg';
import person from '../../images/profile-img.png';

import { titles } from './titles';
import Logo from '../../ui/Logo/Logo';
import burger from '../../images/burger.svg';
import searchwhite from '../../images/search-white.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__block">
        <div>
          <Logo />
        </div>
        <svg className="header__burger">
          <use xlinkHref={burger + "#burger"}/>
        </svg>
        <div className="header__nav">
          {
            titles.map(item =>(
              <Titles
              titles={item.title}
              />
            ))
          }
        </div>
      </div>

      <div className="header__search">
        <input type="text" placeholder="Поиск..." className="header__input"/>
        <button href="/" className="header__button-search">
          <svg className="header__search-white">
            <use xlinkHref={searchwhite + "#search-white"}/>
          </svg>
        </button>
      </div>

      <div className="header__wrapp">
        <div className="header__notif">
          <svg className="header__add">
            <use xlinkHref={add + "#add"}/>
          </svg>
          <svg className="header__bell">
            <use xlinkHref={bell + "#bell"}/>
          </svg>
          <svg className="header__like">
            <use xlinkHref={like + "#like"}/>
          </svg>
        </div>

        <div className="header__profile">
          <a href="/">
            <img src={person} alt="profile-img" className="header__person-img"/>
          </a>
          <div className="header__profile-person">
            <a href="/" className="header__profile-name">Ирина Ларионова</a>
            <p className="header__profile-position">Руководитель агентства</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header