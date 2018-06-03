import React from 'react';
import Content from '../content/component';
import Rapidfacture from '../assets/logo_dunkel.svg';
import DLR from '../assets/DLR.svg';
import CrossEngage from '../assets/CrossEngage.png'
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
            reasonable costs, we are investing heavility in automation.
            I started as a working student and can call myself by now a viable member
            of the team. My responsibilities are:
            <ul>
              <li>Front-end development of the computer aided manufacturing software module</li>
              <li>Product management all across our products</li>
              <li>Business development, building relationshiphs with strategic partners, representing
              the company at business model related events, heavily question the business strategy
              and future plans</li>
              <li>Building a team of developers</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row job-row">
          <div class="col-3">
            <img class="company-logo" src={DLR}></img>
          </div>
          <div class="col-9">
            <h5>Oberpfaffenhofen, Germany</h5>
            <h6>April 2017 - October 2017</h6>
            <p>The <a href="https://www.dlr.de/dlr/en/desktopdefault.aspx/tabid-10368/562_read-479/#/gallery/546">German Space Operations Center</a> is
            divided in different departments. I was fortunate to become a part of software development team of
            low earth satellite mission planning. With support from a small team I built a webapplication (the first
            within this department) to acquire satellite data takes from the web. The app was a dedicated R&D-project
            and was one of the frontiers in software development.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row job-row">
          <div class="col-3">
            <img class="company-logo" src={CrossEngage}></img>
          </div>
          <div class="col-9">
            <h5>Berlin, Germany</h5>
            <h6>April 2017 - October 2017</h6>
            <p><a href="https://www.crossengage.io">CrossEngage</a> developed into a real compitator to large
            cooperates offering online marketing orchestration. By itself it is a platform that sits on top of
            exisiting marketing technologies, like customer databases and configured channels. Its ability
            to orchestrate cross channel marketing paired with sophisticated tracking and intelligent evaluations
            opens up a whole new level of online marketing.
            I joined the company at a very young stage being fortunate to see the company rapidly grow. Since,
            CrossEngage I have never learned with such a paste. My tasks were:
            <ul>
              <li>Automated UI tests for the webapplication</li>
              <li>assisting the product manager learning how to do large scale software development projects</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </Content>
  </div>
  }
}
export default cv;
