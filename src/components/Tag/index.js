import React, { Component } from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion"

const TextTag = styled(motion.span)`
  border-radius: 8px;
  background: rgb(18,128,42);
  display: inline-block;
  padding: 4px 16px;
  margin: 3px 5px 3px 0px;
  color: rgba(255,255,255,.9);
`

class Tag extends Component {
    render() {
      return (
      <TextTag
        initial={{ background: "rgb(18,128,42)" }}
        whileHover={{ scale: 1.1, background: "rgb(118,222,141)" }}
        whileTap={{ scale: 0.9, background: "rgb(118,222,141)" }}
      >{this.props.text}</TextTag>
      );
    }
  }
 
export default Tag;