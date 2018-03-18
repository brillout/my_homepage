import React from 'react';
import Navigation from '../navigation/component';
import HomeTemplate from './template';
import AssertComponents from '../test/assertComponentExistence.js';


AssertComponents([HomeTemplate,Navigation]);

class Home extends React.Component {

  render() {

    return <div>

    <Navigation currentPath={"home"}/>
    <HomeTemplate/>

    </div>
  }

}

export default Home;
