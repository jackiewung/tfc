import React from 'react';

import './Photos.scss';

import two from '../../../../public/assets/photos/2.jpg';
import three from '../../../../public/assets/photos/3.jpg';
import four from '../../../../public/assets/photos/4.jpg';
import five from '../../../../public/assets/photos/5.jpg';
import six from '../../../../public/assets/photos/6.jpg';
import seven from '../../../../public/assets/photos/7.jpg';

const photos = [
  two,three,five,four,six,seven
]

const Photos = () =>
  <div className="Photos">
    { photos.map(photo => (<img src={photo} alt="Tokyo Fried Chicken" key={photo} className="Photos__photoAlbum" />)) }
  </div>

export default Photos;
