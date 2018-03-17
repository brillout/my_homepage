import React from 'react';

class Navigation extends React.Component {

  render() {
    return <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">CV</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/recommendations">Recommendations</a>
  </li>
</ul> }
  }

  export default Navigation;
