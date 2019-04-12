import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Button from "./Button";

import profileActions from "../actions/profile";

export class HomeContent extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/users">Users</Link>
        {!this.props.loggedIn ? (
          <Button onClick={() => this.props.logIn("MM")}>Login</Button>
        ) : (
          <Button onClick={() => this.props.logOut()}>Logout</Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.profile.loggedIn
});

const mapDispatchToProps = {
  logIn: profileActions.logIn,
  logOut: profileActions.logOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContent)
);
