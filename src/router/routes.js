import React from 'react';
import { Route, Router, IndexRoute } from 'react-router-dom';

import App from '../client/components/index.js';
import Location from '../client/components/Location';

export default (
  <Router>
    <Route path="/" component={App} />
    <Route path="/location" component={Location} />
    <Route path="*" component={App} />
  </Router>
);
