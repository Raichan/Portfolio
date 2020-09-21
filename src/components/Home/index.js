import React, { Component } from 'react';
import styled from 'styled-components'
import portrait from './portrait.png';
import $ from 'jquery';

const Tagline = styled.div`
    font-size: 24px;
    color: rgba(255,255,255,.9);
    margin: auto;
`

class Home extends Component {
    componentDidMount() {
        // Function from https://timoanttila.com/tutorials/animated-smooth-scrolling-effect
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
              var target = $(this.hash);
              var header = 100; // sticky header fix, hardcoded for now
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - header
                }, 1000);
                return false;
              }
            }
          });
      }

  render() {
    return (
      <div className="gradient-background">
      <div className="flex-container banner">
        <Tagline>Hi, I'm Laura and I want to use software development to make our planet a better place.</Tagline>
          <div>
              <img className="portrait" src={portrait} height="350px" alt=""></img>
            </div>
        </div>
        </div>
    );
  }
}
 
export default Home;