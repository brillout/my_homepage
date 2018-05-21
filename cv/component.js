import React from 'react';
import Content from '../content/component';
import Rapidfacture from '../assets/logo_dunkel.svg'
import '../assets/global.css';
import './style.css';
class cv extends React.Component {

  render() {
    return <div>
    <Content>
      <div className="container">
        <div class="row job-row">
          <div class="col-3">
            <img class="company-logo" src={Rapidfacture}></img>
          </div>
          <div class="col-9">
            <h5>Munich, Germany</h5>
            <h6>September 2017 until now</h6>
            <p><a href="https://www.rapidfacture.com">Rapidfacture</a> is a Start-Up
            dedicated to single part manufacturing of parts. Currently we are
            working on turned and milled parts. To enable our quick delivery expand
            reasonable costs, we are investing heavility in automation. For instance,
            I am working on our own CAM (computer aided manufacturing) for turned parts.
            Moreover I am involved in product management.
            </p>
          </div>
        </div>
      </div>
    </Content>
  </div>
  }
}
export default cv;
