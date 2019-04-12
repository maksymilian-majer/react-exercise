import React from "react";
import PropTypes from "prop-types";

export function UsersList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.first} {user.last}, {user.email}, {user.phone}
        </li>
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
  })).isRequired
};
