import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Header from '../components/header';

import { getCharId, setEveApiAuthToken, setChar } from '../actions';
import { EVEAPI } from '../constants';
// import { EVEAPI } from '../constants';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});    

const Index = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Header title="Menu" />
    </div>
  );
};

Index.getInitialProps = async ({
  isServer,
  store,
  query: { accessToken },
}) => {
  if (accessToken) {
    console.log(accessToken);
    store.dispatch(setEveApiAuthToken(accessToken));
    console.log('2');
    // store.dispatch(setChar(accessToken, 'jakob'));
    store.dispatch(getCharId());
    console.log('3');
  }
  return { accessToken, isServer };
};

Index.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = ({ isLoginDialogOpen }) => ({
  isLoginDialogOpen,
});

const mapDispatchToProps = dispatch => ({
  getCharId: () => dispatch(getCharId()),
  setEveApiAuthToken: code => dispatch(setEveApiAuthToken(code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Index));

// export default connect(
//     null,
//     null,
// )(withStyles(styles)(Index));
