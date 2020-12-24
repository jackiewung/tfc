import React from "react";
import { Route, Link } from "react-router-dom";
import { foodMenu, drinksMenu } from "./constants";
import "./Menu.scss";

import tfcMenu from "../../../../public/assets/tfcMenu.png";
import OrderOnline from "../OrderOnline";

const Menu = () => {
  return (
    <div className='Menu'>
      <a href={tfcMenu} target='_blank'>
        <img src={tfcMenu} style={{ width: "100%" }} />
      </a>
      <OrderOnline />
    </div>
  );
};

export default Menu;
