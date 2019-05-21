import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Button, IconButton, Toolbar, withStyles, AppBar,
} from '@material-ui/core';

import { connect } from 'react-redux';

import { eveLoginDialog } from '../actions';
import { EVE_API_ACCESS_URL } from '../config/eveApi';

import UserMenu from './userMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    justifyContent: 'space-between',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const image = {
  url: '/static/images/eve-sso-login-white-small.png',
  title: 'EVELogin',
};

const Header = ({
  classes, authToken,
}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar className={classes.grow}>
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <UserMenu />
        {!authToken && (
          <a href={EVE_API_ACCESS_URL}>
            <Button key={image.title} style={{ padding: 0 }}>
              <img alt="Char" src={image.url} />
            </Button>
          </a>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
  authToken: PropTypes.string,
  // char: PropTypes.shape.isRequired,
};

Header.defaultProps = {
  authToken: null,
};

const mapStateToProps = ({ authToken /* char, */ }) => ({
  authToken,
  // char,
});

const mapDispatchToProps = dispatch => ({
  eveLoginDialog: open => dispatch(eveLoginDialog(open)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Header));
