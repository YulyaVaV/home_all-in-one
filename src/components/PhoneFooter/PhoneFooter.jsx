import React from 'react';

import './PhoneFooter.scss';

import message from '../../images/message.svg';
import stack from '../../images/stack.svg';
import house from '../../images/house.svg';
import like from '../../images/like.svg';
import add from '../../images/carbon_add-alt.svg';

export const PhoneFooter = () => {
  return (
    <div className="phone-footer">
      <div className="phone-footer__wrapp">
        <a href="/" className="phone-footer__block">
          <svg className="phone-footer__svg phone-footer__svg-house">
            <use xlinkHref={house + "#house"}/>
          </svg>
          <p className="phone-footer__name">Объявления</p>
        </a>

        <a href="/" className="phone-footer__block">
          <svg className="phone-footer__svg phone-footer__svg-like">
            <use xlinkHref={like + "#like"}/>
          </svg>
          <p className="phone-footer__name">Избранные</p>
        </a>

        <a href="/" className="phone-footer__block">
          <svg className="phone-footer__svg phone-footer__svg-add">
            <use xlinkHref={add + "#add"}/>
          </svg>
          <p className="phone-footer__name">Создать</p>
        </a>

        <a href="/" className="phone-footer__block">
          <svg className="phone-footer__svg phone-footer__svg-stack">
            <use xlinkHref={stack + "#stack"}/>
          </svg>
          <p className="phone-footer__name">Подборки</p>
        </a>

        <a href="/" className="phone-footer__block">
          <svg className="phone-footer__svg phone-footer__svg-message">
            <use xlinkHref={message + "#message"}/>
          </svg>
          <p className="phone-footer__name">Чаты</p>
        </a>

      </div>
    </div>
  )
}

export default PhoneFooter