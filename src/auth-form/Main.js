import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import Login from "./components/Login";
import Signup from "./components/Signup";


const styles = {
    flex: {
        flex: 1,
    },
    close: {
        fontSize: 'xx-large',
        fontWeight: 'lighter',
        padding: 10
    },
    root: {
        flexGrow: 1,
    },
    button: {
        margin: 6,
        width: '90%',
        height: 50,
        fontSize: 18,
        fontWeight: 'lighter',
        boxShadow: 'none',
        textTransform: 'none',
        '&:active': {
            boxShadow: 'none'
        },
    },
    profilebutton: {
        width: '95%'
    },
    profileIcon: {
        fontSize: 150,
        margin: 25
    },
    info: {
        margin: 25,
        fontWeight: 'lighter'
    }
};

const Transition = (props) => {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginSplash: false,
            isSignupSplash:false
        }
    }

    toggleSplash = (splash) => () => {
        this.setState({
            [splash]: !this.state[splash]
        });
    }

    render() {
        const { classes, isOpen, toggleAuthSplash } = this.props;
        return (
            <React.Fragment>
                <Dialog
                    fullScreen
                    open={isOpen}
                    TransitionComponent={Transition}>

                    <div className={classes.root}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} align="right">
                                <CloseIcon onClick={toggleAuthSplash} className={classes.close} />
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Icon className={classNames('fa fa-github', classes.profileIcon)} />
                            </Grid>

                            <Grid item xs={12} align="center">
                                <Typography className={classes.info} variant="h4" gutterBottom>
                                    Login or Signup
                            </Typography>
                            </Grid>

                            <Grid item xs={12} align="center">
                                <Button variant="contained" color="primary" className={classNames(classes.button, classes.profilebutton)}>
                                    <Icon className={classNames('fa fa-facebook-square')} />
                                    &nbsp;Facebook login
                                </Button>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button variant="contained" color="secondary" className={classNames(classes.button, classes.profilebutton)}>
                                    <Icon className={classNames('fa fa-google-plus-square')} />
                                    &nbsp;Goooogle login
                                </Button>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Typography className={classes.info} variant="h6" gutterBottom>
                                    Or, use your email to login
                            </Typography>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <Button onClick={this.toggleSplash('isLoginSplash')} variant="contained" color="secondary" className={classes.button}>
                                    Login
                            </Button>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <Button onClick={this.toggleSplash('isSignupSplash')} variant="contained"  color="default" className={classes.button}>
                                    Signup
                            </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Dialog>
                <Login toggleSplash={this.toggleSplash} isOpen={this.state.isLoginSplash} />
                <Signup toggleSplash={this.toggleSplash} isOpen={this.state.isSignupSplash} />
            </React.Fragment>
        );

    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleAuthSplash: PropTypes.func.isRequired
};

export default withStyles(styles)(FullScreenDialog);