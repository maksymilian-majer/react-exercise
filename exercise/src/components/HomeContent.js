import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import profileActions from "../actions/profile";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

export function HomeContent({ logIn, logOut, loggedIn, classes }) {
  return (
    <div className="container">
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/users"
        className={classes.button}
        onClick={() => logIn("MM")}
      >
        Users
      </Button>
      <br />
      {!loggedIn ? (
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => logIn("MM")}
        >
          Login
        </Button>
      ) : (
        <Button variant="contained" className={classes.button} onClick={logOut}>
          Logout
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.profile.loggedIn
});

const mapDispatchToProps = {
  logIn: profileActions.logIn,
  logOut: profileActions.logOut
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withRouter(HomeContent));
