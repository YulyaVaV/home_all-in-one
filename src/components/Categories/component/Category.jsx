import React from 'react';

import './Category.scss';

export const Category = ({title, img}) => {
  return (
    <a href="/" className="category">
      <p className="category__title">{title}</p>
      <svg className="category__img">{img}</svg>
    </a>
  )
}

export default Category