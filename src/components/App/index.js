import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import Navigation from '../Navigation';
import Container from '../Container';
 
import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
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