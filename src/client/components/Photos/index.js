import React from 'react';

import './Photos.scss';

import two from '../../../../public/assets/photos/2.png';
import three from '../../../../public/assets/photos/3.png';
import four from '../../../../public/assets/photos/4.png';
import five from '../../../../public/assets/photos/5.png';
import six from '../../../../public/assets/photos/6.png';
import seven from '../../../../public/assets/photos/7.png';

const photos = [
  five,two,four,three,five,six,seven
]

const Photos = () =>
  <div className="Photos">
    { photos.map(photo => (<img src={photo} alt="Tokyo Fried Chicken" key={photo} className="Photos__photoAlbum" />)) }
    <p>Photos by <strong><a href="https://www.jchongstudio.com/" target="_blank">Jennifer Chong</a></strong></p>
  </div>

export default Photos;
