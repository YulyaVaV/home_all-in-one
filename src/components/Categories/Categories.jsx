import React from 'react';
import { Slider } from '../Slider/Slider.js';

import { categories } from './notions.jsx';

export const Categories = () => {
  return (
    <div className="categories">
      <Slider 
        categories={categories}
      />
    </div>
  )
}
export default Categories