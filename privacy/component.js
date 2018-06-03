import React from 'react';
import PrivacyTemplate from './template';
import AssertComponents from '../test/assertComponentExistence.js';

import '../assets/global.css';
import './style.css';

AssertComponents([FooterTemplate]);

class Privacy extends React.Component {

  render() {

    return <div>
      <Content>
        <PrivacyTemplate/>
      </Content>
      </div>
  }

}

export default Home;
