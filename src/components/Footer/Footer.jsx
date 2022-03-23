import React from 'react';

import './Footer.scss';
import Logo from '../../ui/Logo/Logo';

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Logo />
      </div>

      <div className="footer__wrapp">
        <div>
          <nav className="footer__link">
            <a href="/" className="footer__link-item">Разместить объявление</a>
            <a href="/" className="footer__link-item">Объявления</a>
            <a href="/" className="footer__link-item">Новости</a>
            <a href="/" className="footer__link-item">Контакты</a>
            <a href="/" className="footer__link-bold">Мобильное приложение</a>
          </nav>
          <hr className="footer__line"/>
        </div>

        <div className="footer__bottom">
          <p>© ООО «ААА» 2022 •</p>
          <a href="/" className="footer__policy">Политика о данных пользователей</a>
          <p>• Оплачивая услуги на “Дом”, вы принимаете</p>
          <a href="/" className="footer__offer">оферту</a>
        </div>
      </div>
    </div>
  )
}

export default Footer