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
      <div style={{ float: "right", paddingRight: 20 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "grey",
            margin: 3,
            lineHeight: "40px",
            float: "left",
            textAlign: "center"
          }}
        >
          {this.props.initials}
        </div>
        <Button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={this.props.logOut}
        >
          Logout
        </Button>
      </div>
    );
  }

  render() {
    const classes = this.props.classes;
    console.log('History', this.props.history.length);
    const backButton = this.props.history.location.pathname !== '/' ? (
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
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <Link to="/">
                <img
                  alt={"logo"}
                  style={{ maxHeight: 40, flex: 1 }}
                  src="/favicon-196x196.png"
                />
              </Link>
              Modus Create
            </Typography>
            {this.props.loggedIn
              ? this.renderLoggedIn()
              : this.renderLoggedOut()}
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
