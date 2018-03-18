import React from 'react';
import Josh from '../assets/Josh.jpg';
import '../assets/global.css';
import './style.css';

class HomeTemplate extends React.Component {
  render() {
    return <div>
      <div className="black-background width-100%">
        <div className="container responsive-width padding-top">
          <div className="row">
            <div className="col-auto">
              <img className="profile-picture" src={Josh}>
              </img>
            </div>
            <div className="col-auto">
              <div className="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col-auto align-self-center">
                    <h3>
                      Joshua Simon
                    </h3>
                    <p>
                      Aerospace engineering student
                    </p>
                    <p>
                      Front-End developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-top">
            <p>
              My ambition is to bring people to mars.
            </p>
            <p>
              Currently I am studying in Berlin looking forward to finish my Bachelor's degree.
              Besides my studies I am employed as a working student at an awesome company - <a href="rapidfacture.com">Rapidfacture</a>.
              I help to push automation forward in single part manufacturing, especially turned parts.
              Check out my <a href="/cv">CV</a> to get an impression of my prior work experience and projects.
              Or get in touch! Feel free to reach out to me on <a href="https://www.linkedin.com/in/josh-simon/">LinkedIn</a>
              or write me an <a href="joshsimon@gmx.de">email</a>.
              </p>
            </div>
          </div>
        </div>
      </div>




    }
  }
  export default HomeTemplate;
