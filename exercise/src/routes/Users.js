import React, { Component } from "react";

import TopBar from "../components/TopBar";
import { UsersList } from "../components/UsersList";

export default class Users extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <UsersList
          users={[
            {
              id: "1234",
              first: "Maks",
              last: "Majer",
              email: "maksymilian.majer@gmail.com",
              phone: "123456789"
            }
          ]}
        />
      </div>
    );
  }
}
