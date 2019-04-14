import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";

const styles = theme => ({
  root: {
    minWidth: 400,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  container: {
    padding: 20
  }
});

export function UsersList({ users, classes }) {
  return (
    <List className={classes.root}>
      {users.map(user => (
        <ListItem alignItems="flex-start" key={user.id} component={Link} to={`/users/${user.id}`} button>
          <ListItemIcon>
            <UserIcon />
          </ListItemIcon>
          <ListItemText
            primary={`${user.first} ${user.last}`}
            secondary={
              <React.Fragment>
                Email: {user.email}
                <br />
                Phone: {user.phone}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
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

export default withStyles(styles)(UsersList);
