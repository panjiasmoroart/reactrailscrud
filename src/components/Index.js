// Create.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow'

export default class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/books')
      .then(response => {
        // console.log(response.data);
        this.setState({ books: response.data });
        // console.log(JSON.stringify(this.state.books))
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  tabRow() {
    return this.state.books.map(function (object, i) {
      return (
        <TableRow
          obj={object}
          key={i}
        />
      )
    })
  }

  delete(data, id) {

    // https://stackoverflow.com/questions/51369563/delete-request-with-axios-react
    axios.delete('http://localhost:3000/api/v1/books/' + id)
      // .then(console.log('Deleted'))
      .then(() => {
        // this.setState(previousState => {
        //   return {
        //     books: previousState.books.filter(m => m.id !== data.id)
        //   };
        // });

        // atau bisa juga
        const removeBook = this.state.books.filter(bookData => bookData.id !== id)

        // console.log(removeBook);
        this.setState({
          books: removeBook
        })
      })
      .catch(err => console.log(err))
  }

  shouldComponentUpdate(nextProps) {
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.books !== this.state.books) {
      console.log('books state has changed.')
    }
  }

  render() {
    return (
      <div>
        <table className="table table-striped table-bordered" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Author</th>
              <th className="text-center">Title</th>
              <th colSpan="2" className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {false && this.tabRow()}
            {(this.state.books || {}).map((data, index) => {
              return (
                <tr key={`id-${data.id}`}>
                  <td>
                    <img
                      src={data.image}
                      alt="Belum Tersedia"
                      width="80"
                      height="80"
                      className=""
                    />
                  </td>
                  <td>
                    {data.author}
                  </td>
                  <td>
                    {data.title}
                  </td>
                  <td className="text-center">
                    <Link to={`${data.id}/edit`} className="btn btn-primary btn-sm">Edit</Link>&nbsp;
                    <button
                      onClick={() => {
                        this.delete(data, data.id)
                      }}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

