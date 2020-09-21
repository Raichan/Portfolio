import React, { Component } from 'react';

import Home from '../Home';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Contact from '../Contact';

class Container extends Component {
    render() {
      return (
        <div>
            <Home/>
            <AboutMe/>
            <hr class="divider"/>
            <Projects/>
            <Contact/>
        </div>
      );
    }
  }

  export default Container;