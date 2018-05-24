import React from 'react';
import RecommendationsTemplate from './template.js';
import Navigation from '../navigation/component';
import AssertComponents from '../test/assertComponentExistence.js';
import Content from '../content/component.js'


AssertComponents([RecommendationsTemplate,Content]);

class Recommendations extends React.Component {

  render() {
    return <div>

    <Content>
      <RecommendationsTemplate/>
    </Content>
    </div>
  }

}

export default Recommendations;
