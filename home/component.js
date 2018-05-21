import React from 'react';
import Navigation from '../navigation/component';
import Footer from '../footer/component';
import Content from '../content/component';

import HomeTemplate from './template';

import AssertComponents from '../test/assertComponentExistence.js';

import '../assets/global.css';
import './style.css';
AssertComponents([HomeTemplate,Navigation]);

class Home extends React.Component {

  render() {

    return <div>
    <Content>
      <HomeTemplate/>
    </Content>
    </div>
  }

}

export default Home;
