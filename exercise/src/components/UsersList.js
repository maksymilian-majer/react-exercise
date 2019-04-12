import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function UsersList({ users }) {
  return (
    <div className="container">
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.first} {user.last}
            </Link>
            , {user.email}, {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string
    })
  ).isRequired
};
