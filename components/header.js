import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { eveLoginDialog } from '../actions';
import { EVE_API_ACCESS_URL } from '../config/eveApi';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const image = 
{
    url: '/static/images/eve-sso-login-white-small.png',
    title: 'EVELogin',
};

const Header = ({ title = 'Menu', classes }) => 
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    {title}
                </Typography>
                <a href={EVE_API_ACCESS_URL}>
                    <Button
                        key={image.title}
                        style={{padding: 0}}
                    >
                        <img src={image.url} />
                    </Button>
                </a>
            </Toolbar>
        </AppBar>
    </div>
    

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
    eveLoginDialog: (open) => dispatch(eveLoginDialog(open)),
});

export default connect(
    null,
    mapDispatchToProps,
)(withStyles(styles)(Header));