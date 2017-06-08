import React from 'react';

import './MainPhotos.scss';

import alcoholList from '../../../../public/assets/alcohol.png';
import fullMeal from '../../../../public/assets/meal.png';
import ponzuBears from '../../../../public/assets/ponzubears.png';

const photos = [
  alcoholList,
  fullMeal,
  ponzuBears
]

const MainPhotos = () =>
  <div className="MainPhotos">
    { photos.map(photo => ( <img src={photo} alt="Tokyo Fried Chicken" key={photo} className="MainPhotos__photo" /> )) }
  </div>

export default MainPhotos;
