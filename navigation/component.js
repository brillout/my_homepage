import React from 'react';
import './style.css';
import classnames from 'classnames';

class Navigation extends React.Component {

  render() {
    return <div className="navigation">
        <div className="black-bar-top">
          <p className="white-header">Joshua Simon personal website</p>
        </div>
        <ul className="nav nav-tabs grey-background">
          <li className="nav-item">
              <a className={classnames('nav-link', this.props.currentPath === 'home' && 'active')} href="/home.html">Home</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'cv' && 'active')} href="/cv.html">CV</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'blog' && 'active')} href="/blog.html">Blog</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'recommendations' && 'active')} href="/recommendations.html">Recommendations</a>
          </li>
        </ul>
      </div>
    }
  }

  export default Navigation;
