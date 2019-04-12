import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import TopBar from "../components/TopBar";

export class User extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <div className="container">
          <div>{this.props.user.first}</div>
          <Link to="/users">{"< "}Back</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { match }) => ({
  user: users.list.find(user => user.id === match.params.userId) || {}
});

export default withRouter(connect(mapStateToProps)(User));
