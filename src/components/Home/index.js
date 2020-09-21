import React, { Component } from 'react';
import styled from 'styled-components'
import portrait from './portrait.png';

const Tagline = styled.div`
    font-size: 24px;
    color: rgba(255,255,255,.9);
    margin: auto;
`

class Home extends Component {
  render() {
    return (
      <div class="gradient-background">
      <div class="flex-container banner">
        <Tagline>Hi, I'm Laura and I want to use software development to make our planet a better place.</Tagline>
          <div>
              <img class="portrait" src={portrait} height="350px"></img>
            </div>
        </div>
        </div>
    );
  }
}
 
export default Home;