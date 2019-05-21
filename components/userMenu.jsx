import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  withStyles, Menu, MenuItem, Button, Avatar, Typography,
} from '@material-ui/core';

import { EVE_IMAGE_SERVER_URL } from '../config/eveApi';
import { logout } from '../actions';

const styles = {
  menu: {
    marginTop: 45,
  },
  leftBar: {
    display: 'flex',
  },
  avatar: {
    marginRight: 10,
  },
  charName: {
    alignSelf: 'center',
  },
};

const UserMenu = ({
  classes, authToken, char, logoutDisp,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div>
      {authToken && (
        <Button
          className={classes.leftBar}
          onClick={event => setAnchorEl(event.currentTarget)}
        >
          <Avatar
            alt="Avatar"
            src={`${EVE_IMAGE_SERVER_URL}/Character/${char.id}_128.jpg`}
            className={classes.avatar}
          />
          <Typography
            variant="body2"
            color="inherit"
            className={classes.charName}
          >
            {char.name}
          </Typography>
        </Button>
      )}
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        className={classes.menu}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            logoutDisp();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
  authToken: PropTypes.string,
  // char: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  char: PropTypes.objectOf(Object),
  logoutDisp: PropTypes.func,
};

UserMenu.defaultProps = {
  authToken: null,
  char: null,
  logoutDisp: null,
};

const mapStateToProps = ({ authToken, char }) => ({
  authToken,
  char,
});

const mapDispatchToProps = dispatch => ({
  logoutDisp: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(UserMenu));
