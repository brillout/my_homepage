import React from 'react';
import './style.css';
import classnames from 'classnames';

class Navigation extends React.Component {
  constructor(props) {
   super(props);
    this.path = 'home';
    this.setPath = this.setPath.bind(this);

}


  setPath(path){
    console.log('changed path ', path);
    this.path = path;
  }

  render() {
    return <div className="navigation">
        <div className="black-bar-top">
          <p className="white-header">Joshua Simon personal website</p>
        </div>
        <p>{ this.path }</p>

        <ul className="nav nav-tabs grey-background">
          <li className="nav-item">
              <a onclick={this.setPath('home')} className={classnames('nav-link', this.path === 'home' && 'active')} href="/home.html">Home</a>
          </li>
          <li className="nav-item">
            <a  onclick={this.setPath('cv')} className={classnames('nav-link', this.path === 'cv' && 'active')} href="/cv.html">CV</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'blog.html' && 'active')} href="/blog.html">Blog</a>
          </li>
          <li className="nav-item">
            <a className={classnames('nav-link', this.props.currentPath === 'recommendations.html' && 'active')} href="/recommendations.html">Recommendations</a>
          </li>
        </ul>
      </div>
    }
  }

  export default Navigation;
