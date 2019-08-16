import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import Subscribe from '../Subscribe';

import './Nav.scss';

const navData = [
  { text: 'Menu', link: '/menu' },
  { text: 'Location', link: '/location' },
  { text: 'Photos', link: '/photos' }
];

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      subscribe: false
    };
  }

  turnSubscribeOff = () => {
    this.setState({ subscribe: false });
  }

  turnSubscribeOn = () => {
    this.setState({ subscribe: true });
  }

  render () {
    return (
      <ul className="Nav">
        { navData.map(nav => ( <li className="Nav__link" key={nav.link}><Link to={nav.link}>{nav.text}</Link></li> )) }
      </ul>
    );
  }
}

export default Nav;
