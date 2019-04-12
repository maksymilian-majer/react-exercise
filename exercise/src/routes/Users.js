import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import userActions from "../actions/users";

import TopBar from "../components/TopBar";
import { UsersList } from "../components/UsersList";

export class Users extends Component {
  componentDidMount() {
    this.props.findAll();
  }

  renderLoader() {
    return <Fragment>Loading..</Fragment>;
  }

  renderUsersList() {
    return <UsersList users={this.props.users.list} />;
  }

  renderError() {
    return <Fragment>Error: {this.props.users.error}</Fragment>;
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        {this.props.users.loading
          ? this.renderLoader()
          : this.props.users.error
          ? this.renderError()
          : this.renderUsersList()}
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
