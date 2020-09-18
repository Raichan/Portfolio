import React from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../../constants/routes';
 
const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.ABOUTME}>About me</Link>
      </li>
      <li>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
      </li>
      <li>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </li>
    </ul>
  </div>
);
 
export default Navigation;