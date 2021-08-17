import React, { Component } from "react";

import UserService from "../services/user.service";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import AddTutorial from "./add-tutorial.component";
import Tutorial from "./home-tutorial.component";
import TutorialsList from "./tutorial-list.component";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This Account is {this.state.content}</h3>
        </header>
        <Router>
        <nav className="navbar navbar-expand">
          <Link to={"/user/tutorials"} className="navbar-brand">
            Tutorials List 
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/user/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">              
              <Link to={"/user/tutorial/add"} className="nav-link">
                Add Tutorial
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/user/tutorials"]} component={TutorialsList} />
            <Route exact path="/user/tutorial/add" component={AddTutorial} />
            <Route path="/user/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </Router>
      </div>

    );
  }
}