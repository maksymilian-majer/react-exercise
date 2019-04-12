import React, { Fragment } from "react";
import PropTypes from "prop-types";

export function UserDetails({ user }) {
  return (
    <Fragment>
      <div>
        <img src={user.picture} alt="" />
      </div>
      <div>First name: {user.first}</div>
      <div>Last name: {user.last}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
    </Fragment>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
  })
};
