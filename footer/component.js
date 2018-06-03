import React from 'react';
import FooterTemplate from './template';
import AssertComponents from '../test/assertComponentExistence.js';

import LinkedIn from '../assets/LinkedIn.png';
import '../assets/global.css';
import './style.css';

AssertComponents([FooterTemplate]);

class Home extends React.Component {

  render() {

    return <div class="footer footer-dark position-relative">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
          <p className="contact-nodes-p">
              <a href="/privacy">Privace policy</a>
            </p>
          </div>
          <div class="col text-right">
            <p className="contact-nodes-p">
            <a className="contact-node-a" href="https://www.linkedin.com/in/josh-simon/">
              LinkedIn
            </a>
              <a className="contact-node-a" href="mailto:joshsimon@gmx.net">
                Email Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  }

}

export default Home;
