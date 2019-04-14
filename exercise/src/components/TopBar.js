import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBackIos";
import Avatar from "@material-ui/core/Avatar";

import profileActions from "../actions/profile";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    marginRight: 10
  },
  avatar: {
    marginRight: 10
  },
  title: {
    color: "#fff",
    textDecoration: "none"
  },
  logo: {
    marginRight: 10,
    maxHeight: 40,
    flex: 1
  }
};

class TopBar extends Component {
  renderLoggedOut() {
    return (
      <Fragment>
        <Button
          variant="contained"
          onClick={() => this.props.logIn("MM")}
          className={this.props.classes.loginButton}
        >
          Login
        </Button>
        <Button variant="contained" color="secondary">
          Signup
        </Button>
      </Fragment>
    );
  }

  renderLoggedIn() {
    return (
      <Fragment>
        <Avatar className={this.props.classes.avatar}>
          <Typography variant="body1">{this.props.initials}</Typography>
        </Avatar>
        <Button variant="contained" color="secondary" onClick={this.props.logOut}>
          Logout
        </Button>
      </Fragment>
    );
  }

  render() {
    const classes = this.props.classes;
    const backButton =
      this.props.history.location.pathname !== "/" ? (
        <IconButton
          className={classes.backButton}
          color="inherit"
          aria-label="Back"
          onClick={this.props.history.goBack}
        >
          <ArrowBack />
        </IconButton>
      ) : null;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {backButton}
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/" className={classes.title}>
                <img alt={"logo"} className={classes.logo} src="/favicon-196x196.png" />
                Modus Create
              </Link>
            </Typography>
            {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  initials: PropTypes.string
};

const mapStateToProps = state => ({
  loggedIn: state.profile.loggedIn,
  initials: state.profile.initials
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
)(withRouter(TopBar));
