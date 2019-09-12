import React from "react";
import "./SideMenu.css";
import { Link } from 'react-router-dom';

export function SideMenu() {
  return (
    <nav className="features-sideMenu__root">
      <ul className="features-sideMenu__list">
        <li><Link to="/flexbasic">Flex Basic</Link></li>
        <li><Link to="/flexgrowone">Flex Grow One</Link></li>
        <li><Link to="/flexgrowall">Flex Grow All</Link></li>
        <li><Link to="/flexgrowdiff">Flex Grow Different</Link></li>
        <li><Link to="/flexshrink">Flex Shrink</Link></li>
        <li><Link to="/flexwrap">Flex Wrap</Link></li>
      </ul>
    </nav>
  );
}
