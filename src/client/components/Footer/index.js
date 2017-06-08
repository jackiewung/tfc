import React from 'react';
import { Link } from 'react-router-dom';

import FacebookLogo from '../../../../public/assets/facebook.jpg';
import InstagramLogo from '../../../../public/assets/instagram.jpg';
import TwitterLogo from '../../../../public/assets/twitter.jpg';
import YelpLogo from '../../../../public/assets/yelp.jpg';

import './Footer.scss';

const Footer = () =>
  <div className="Footer">
    <div className="Footer__col1">
      <h1>Talk to us</h1>
      <p>626-282-9829</p>
      <p className="Footer__email"><a href="mailto:info@tokyofriedchicken.com">info@tokyofriedchicken.com</a></p>
    </div>
    <div className="Footer__col2">
      <h1>Connect with us</h1>
      <span className="Footer__socialIcons">
        <a href="https://www.facebook.com/TokyoFriedChickenCo/" target="_blank">
          <img src={FacebookLogo} alt="Facebook" className="Footer__socialIcon" />
        </a>
        <a href="https://www.instagram.com/tokyofriedchickenco/" target="_blank">
          <img src={InstagramLogo} alt="Instagram" className="Footer__socialIcon" />
        </a>
        <a href="https://twitter.com/tokyofc_co" target="_blank">
          <img src={TwitterLogo} alt="Twitter" className="Footer__socialIcon" />
        </a>
        <a href="https://www.yelp.com/biz/tokyo-fried-chicken-co-monterey-park-2" target="_blank">
          <img src={YelpLogo} alt="Yelp" className="Footer__socialIcon" />
        </a>
      </span>
    </div>
  </div>

export default Footer;
