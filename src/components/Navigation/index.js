import React from 'react';
//import { Link } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'

import * as ROUTES from '../../constants/routes';
 
const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark gradient-background',
})`
  height: 50px;
  width: 100%;
  margin: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

const NavbarItem = styled.li`
    color: rgba(255,255,255,.5);
    margin-right: 20px;
`

const Name = styled.h1`
    margin-left: 15px;
`

const Navigation = () => (
  <Nav>
    <Name>Laura Sirola</Name>
    <ul>
      <NavbarItem>
        <Link to={ROUTES.ABOUTME}>About me</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to={ROUTES.PROJECTS}>Projects</Link>
      </NavbarItem>
      <NavbarItem>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </NavbarItem>
    </ul>
  </Nav>
);
 
export default Navigation;