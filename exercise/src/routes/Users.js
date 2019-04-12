import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import userActions from "../actions/users";

import TopBar from "../components/TopBar";
import { UsersList } from "../components/UsersList";

export class Users extends Component {
  componentDidMount() {
    this.props.findAll();
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <UsersList
          users={this.props.users.list}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  findAll: () => dispatch(userActions.findAll())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);
