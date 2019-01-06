import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Quercus Land Stewardship Services</h1>
        <p>app for internal management of jobs/clients etc</p>
        <Link to="about" className="btn btn-primary btn-lg"> Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
