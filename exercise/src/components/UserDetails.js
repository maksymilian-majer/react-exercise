import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  card: {
    minWidth: 400
  },
};

export function UserDetails({ user, classes }) {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Profile">
            <img src={user.picture} alt="" />
          </Avatar>
        }
        title={`${user.first} ${user.last}`}
      />
      <CardContent>
        <Typography component="p">
          Email: {user.email}
          <br />
          Phone: {user.phone}
        </Typography>
      </CardContent>
    </Card>
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

export default withStyles(styles)(UserDetails);
