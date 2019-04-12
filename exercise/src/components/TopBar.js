import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Button from "./Button";

import profileActions from "../actions/profile";

class TopBar extends Component {
  renderLoggedOut() {
    return (
      <div style={{ float: "right", paddingRight: 20 }}>
        <Button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => this.props.logIn("MM")}
        >
          Login
        </Button>
        <Button style={{ backgroundColor: "red", color: "white" }}>
          Signup
        </Button>
      </div>
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
            lineHeight: '40px',
            float: "left",
            textAlign: 'center'
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
    return (
      <header
        style={{
          height: 48,
          width: "100%",
          backgroundColor: "rgb(102,63,180)",
          color: "white",
          padding: "6px 10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src="favicon-196x196.png"
            />
          </Link>
        </div>
        <div>{"Modus Create"}</div>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopBar)
);
