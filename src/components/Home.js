// Create.js
import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
				<h1>Welcome to Panji Asmoro</h1>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <br />
        <Link to={'/'} className="btn btn-primary btn-lg">Learn More</Link>
			</div>
    )
  }
}


