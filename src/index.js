import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'history';
import App from './client/components';

import routes from "./router/routes";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
