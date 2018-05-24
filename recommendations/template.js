import React from 'react';
import LaLaLand from '../assets/LaLaLand.jpg';
import '../assets/global.css';

class RecommendationsTemplate extends React.Component {

  render() {
    return <div>

    <div className="black-background width-100%">

      <div className="container responsive-width padding-top">
        <div className="row justify-content-center">
          <div className="col-md-auto col-sm-auto">
            <img src={LaLaLand}/>
          </div>
          <div className="col-md col-sm-12">
            <h3>La La Land</h3>
            <p>2016</p>
            <p>Very good soundtrack and unbelievable performance of Emma Stone. </p>
            <p>The plot of "LaLaLand" is somewhat secondary in relation to the created
            feelings within the viewer while watching.</p>
            <p>You might find yourself confronted with the sumbling existence of the Jazz pianist and a young woman
            trying desperatly to become an actress in Hollywood. </p>
            <p> Both find themselves in LA which seems like killing both of their natural habitats. The small and good
            quality Jazz bars and never ending casting marathons, burring young talents
            that travel from all over the world to Los Angeles. </p>
            <p> They meet, they both fall in love. But they cannot share one space. </p>
            <p> One crisis is chasing another. Both fighting for them slowly realizing, they are breaking apart. </p>
          </div>
        </div>
      </div>
      <div className="container responsive-width padding-top">
        <div className="row justify-content-center">
          <div className="col-md-auto col-sm-auto">
            <img src={LaLaLand}/>
          </div>
          <div className="col-md col-sm-12">
            <h3>La La Land</h3>
            <p>2016</p>
            <ul>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </div>
  }
}

export default RecommendationsTemplate;
