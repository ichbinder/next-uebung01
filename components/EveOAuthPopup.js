import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import { connect } from 'react-redux';
import { eveLoginDialog } from '../actions';
import { EVE_API_ACCESS_URL } from '../config/eveApi';

const Transition = props => <Slide direction='up' {...props} />

const EveOAuthPopup = ({ isLoginDialogOpen, eveLoginDialog }) => 
    <Dialog
        open={isLoginDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => eveLoginDialog(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <iframe src={EVE_API_ACCESS_URL} />
    </Dialog>
    
EveOAuthPopup.propsTypes = {
    isLoginDialogOpen: PropTypes.bool.isRequired,
    eveLoginDialog: PropTypes.func.isRequired,
};

// const mapStateToProps = ({ isLoginDialogOpen }) => ({
//     isLoginDialogOpen,
// });

// const mapDispatchToProps = dispatch => ({
//     eveLoginDialog: (code) => dispatch(eveLoginDialog(code)),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(EveOAuthPopup);

export default EveOAuthPopup;