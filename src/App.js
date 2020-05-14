import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
import Index from './components/Index';

function App() {
  return (
    <BrowserRouter>

      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-nav-custom">
          <div className="container">
            <Link to={'/'} className="navbar-brand">React CRUD With Rails 5</Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav><br />

        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={Create} />
            <Route exact path='/:id/edit' component={Edit} />
            <Route exact path='/index' component={Index} />
          </Switch>

          <footer className="text-left">
            <small>
              Copyright &copy; 2020 PanjiAsmoro ReactJS with Rails 5
            </small>
          </footer>
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
