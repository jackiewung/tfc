import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Logo from '../../../public/assets/TFC_Logo.png';

import Nav from './Nav';
import Location from './Location';
import Footer from './Footer';
import MainPhotos from './MainPhotos';
import Photos from './Photos';
import Menu from './Menu';

import '../styles/app.scss';

const App = () => 
  <div className="App">
    <div className="App__logoContainer">
      <Link to="/"><img className="App__logo" src={Logo} alt="Tokyo Fried Chicken Co." /></Link>
    </div>
    <div className="App__padding"><Nav /></div>
    <div className="App__main">
      <Switch>
        <Route exact path='/' component={MainPhotos} />
        <Route exact path='/location' component={Location} />
        <Route exact path='/photos' component={Photos} />
        <Route exact path='/menu' component={Menu} />
      </Switch>
    </div>
    <div className="App__padding"><Footer /></div>
  </div>;

export default App;
