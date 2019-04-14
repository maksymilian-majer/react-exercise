import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";

import userActions from "../actions/users";

import TopBar from "../components/TopBar";
import UsersList from "../components/UsersList";

const styles = {
  container: {
    padding: 20
  }
};

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
        <div className={this.props.classes.container}>
          {this.props.users.loading
            ? this.renderLoader()
            : this.props.users.error
            ? this.renderError()
            : this.renderUsersList()}
        </div>
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

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withRouter(Users));
