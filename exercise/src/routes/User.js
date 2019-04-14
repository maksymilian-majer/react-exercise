import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import compose from "recompose/compose";
import { Button, withStyles } from "@material-ui/core";

import TopBar from "../components/TopBar";
import { UserDetails } from "../components/UserDetails";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export function User({ user, classes }) {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <UserDetails user={user} />
        <Button component={Link} to="/users" className={classes.button}>
          {"< "}Back
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users }, { match }) => ({
  user: users.list.find(user => user.id === match.params.userId) || {}
});

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(withRouter(User));
