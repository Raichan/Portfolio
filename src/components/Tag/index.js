import React, { Component } from 'react';
import styled from 'styled-components'

const TextTag = styled.span`
  border-radius: 8px;
  background: rgb(18,128,42);
  display: inline-block;
  padding: 4px 16px;
  margin: 3px 3px 3px 0px;
  color: rgba(255,255,255,.9);
`

class Tag extends Component {
    render() {
      return <TextTag>{this.props.text}</TextTag>;
    }
  }
 
export default Tag;