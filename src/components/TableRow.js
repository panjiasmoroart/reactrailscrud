import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete('http://localhost:3000/api/v1/books/' + this.props.obj.id)
      // .then(console.log('Deleted'))
      .then(() => {
        // if (this.props.onSubmit) {
        //   this.props.onSubmit(this.props.obj)
        // }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <tr>
          <td>
            <img
              src={this.props.obj.image}
              alt="Belum Tersedia"
              width="80"
              height="80"
              className=""
            />
          </td>
          <td>
            {this.props.obj.author}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td className="text-center">
            <Link to={this.props.obj.id + "/edit"} className="btn btn-primary btn-sm">Edit</Link>
            &nbsp;
            <button onClick={this.delete} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </>
    );
  }
}

export default TableRow;
