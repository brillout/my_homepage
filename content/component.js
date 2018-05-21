import React from 'react';
import AssertComponents from '../test/assertComponentExistence.js';

import Navigation from '../navigation/component';
import Footer from '../footer/component'

import '../assets/global.css';
import './style.css';

class Content extends React.Component {

  render() {

    return <div className="content">
      <Navigation currentPath={"home"}/>
      <div className="expand-content black-background">
        {this.props.children}
      </div>
      <Footer/>
    </div>
  }

}

export default Content;
