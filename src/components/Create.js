// Create.js
import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

  constructor(props) {
    super(props);
    // bind biar ga error TypeError: Cannot read property 'setState' of undefined
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      image: '',
      author: '',
      title: ''
    }

  }

  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }


  onSubmit(e) {
    //alert('test bro');
    e.preventDefault();

    const obj = {
      image: this.state.image,
      author: this.state.author,
      title: this.state.title
    }

    let duplicateObj = Object.assign({}, obj)
    // console.log(obj);

    axios.post('http://localhost:3000/api/v1/books', duplicateObj)
      .then(res => console.log(res.data));

    // setelah insert form kosongkan lagi
    this.setState({
      image: '',
      author: '',
      title: ''
    })

  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Image:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
            />
          </div>
          <div className="form-group">
            <label>Author: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }

}
