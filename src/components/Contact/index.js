import React, { Component } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
 
const Contactinfo = styled.div.attrs({
  className: 'gradient-background centered',
})`
  padding: 10px 0 100px 0;
`

const Email = styled.span`
position: relative;
top: -5px;
`

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <Contactinfo>
          <h1>Contact</h1>
          <p className="socialbuttons">
            <a href="https://www.github.com/Raichan/"
              className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/laurasirola/"
              className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/rairaichan/"
              className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/LauraSirola" 
              className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/LauraSirola"
              className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </p>
          <p><FontAwesomeIcon icon={faEnvelope} size="2x" className="social"/> <Email>laura.m.sirola@gmail.com</Email>
          </p>
        </Contactinfo>
      </div>
    );
  }
}

export default Contact;