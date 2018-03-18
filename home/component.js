import React from 'react';
import Navigation from '../navigation/component';
import Footer from '../footer/component';

import HomeTemplate from './template';
import AssertComponents from '../test/assertComponentExistence.js';


AssertComponents([HomeTemplate,Navigation]);

class Home extends React.Component {

  render() {

    return <div>

    <Navigation currentPath={"home"}/>
    <HomeTemplate/>
    <Footer/>
    </div>
  }

}

export default Home;
