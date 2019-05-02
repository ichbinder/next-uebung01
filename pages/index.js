import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { eveLoginDialog } from '../actions';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

const Index = ({ classes }) => 
    <div className={classes.root}>
        <Header title='Menu'/>
    </div>

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ isLoginDialogOpen }) => ({
    isLoginDialogOpen,
});

const mapDispatchToProps = dispatch => ({
    eveLoginDialog: (open) => dispatch(eveLoginDialog(open)),
})
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(styles)(Index));