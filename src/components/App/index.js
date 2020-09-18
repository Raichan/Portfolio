import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import Navigation from '../Navigation';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';
 
import * as ROUTES from '../../constants/routes';
 
const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.ABOUTME} component={AboutMe} />
      <Route path={ROUTES.PROJECTS} component={Projects} />
      <Route path={ROUTES.CONTACT} component={Contact} />
    </div>
  </Router>
);
 
export default App;