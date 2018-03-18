import React from 'react';
import './style.css';
import classnames from 'classnames';

class Navigation extends React.Component {

  render() {
    return <div>
        <div className="black-bar-top">
        </div>
        <ul className="nav nav-tabs grey-background">
          <li className="nav-item">
              <a className={classnames('nav-link', this.props.currentPath === 'home' && 'active')} href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'cv' && 'active')} href="/cv">CV</a>
          </li>
          // <li className="nav-item">
          //   <a className={classnames('nav-link', this.props.currentPath === 'blog' && 'active')} href="/blog">Blog</a>
          // </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'recommendations' && 'active')} href="/recommendations">Recommendations</a>
          </li>
        </ul>
      </div>
    }
  }

  export default Navigation;
