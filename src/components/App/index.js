import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import Navigation from '../Navigation';
import Container from '../Container';
 
import * as ROUTES from '../../constants/routes';

function hashLinkScroll() {
  console.log('hash');
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

const App = () => (
  <Router onUpdate={hashLinkScroll}>
    <div>
      <Navigation />
      
      <Route exact path={ROUTES.HOME} component={Container} />
      <Route path={ROUTES.ABOUTME} component={Container} />
      <Route path={ROUTES.PROJECTS} component={Container} />
      <Route path={ROUTES.CONTACT} component={Container} />
    </div>
  </Router>
);
 
export default App;