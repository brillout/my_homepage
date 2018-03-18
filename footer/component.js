import React from 'react';
import FooterTemplate from './template';
import AssertComponents from '../test/assertComponentExistence.js';


AssertComponents([FooterTemplate]);

class Home extends React.Component {

  render() {

    return <div>
    <FooterTemplate/>
    </div>
  }

}

export default Home;
