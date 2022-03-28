import React, { Component } from 'react';
import HeaderLayout from './HeaderLayout.jsx';
import BodyLayout from './BodyLayout.jsx';
import SectionLayout from './SectionLayout.jsx';
import Footerlayout from './Footerlayout.jsx';

export default class AssighnmentLayout extends Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        <BodyLayout />
        <SectionLayout />
        <Footerlayout />
      </div>
    )
  }
}
