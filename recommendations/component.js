import React from 'react';
import RecommendationsTemplate from './template.js';
import Navigation from '../navigation/component';
import AssertComponents from '../test/assertComponentExistence.js';

AssertComponents([RecommendationsTemplate,Navigation]);

class Recommendations extends React.Component {

  render() {
    return <div>

    <Navigation/>
    <RecommendationsTemplate/>

    </div>
  }

}

export default Recommendations;
