import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import "./Die.css";

class Die extends Component {
  render() {
    let face; 
    switch (this.props.val) {
      case 1: face = 'one'
      break;
      case 2: face = 'two'
      break; 
      case 3: face = 'three'
      break;
      case 4: face = 'four'
      break;
      case 5: face = 'five'
      break;
      case 6: face = 'six'
      break;
      default: face = ''
    }
    let classes = `Die fas fa-dice-${face} fa-5x `
    if(this.props.locked) classes += 'Die-locked '
    if(this.props.rolling) classes += 'Die-rolling'
    return (
      <i
        className={classes}
        onClick={() => this.props.handleClick(this.props.idx)}
        disabled={this.props.rollsLeft === 0}
      />
    );
  }
}

export default Die;
