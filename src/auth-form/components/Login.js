import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Switch from '@material-ui/core/Switch';
import ChevronLeftRounded from '@material-ui/icons/ChevronLeftRounded';
import TextField from '@material-ui/core/TextField';


const styles = {
    flex: {
        flex: 1,
    },
    root: {
        flexGrow: 1,
    },
    linkbutton: {
        margin: 6,
        fontSize: 18,
        boxShadow: 'none',
        textTransform: 'none',
        '&:active': {
            boxShadow: 'none'
        },
    },
    button: {
        margin: 6,
        width: '90%',
        height: 50,
        fontSize: 18,
        fontWeight: 'bold',
        boxShadow: 'none',
        marginTop: 30,
        marginBottom: 20,
        textTransform: 'none',
        '&:active': {
            boxShadow: 'none'
        },
    },
    textField: {
        width: '90%',
        marginBottom: 25
    },
    title: {
        margin: 10
    },
    back: {
        margin: 5,
        fontSize: '2.5rem'
    }
};

const Transition = (props) => {
    return <Slide direction="left" {...props} />;
}

const Login = (props) => {
    const { classes, isOpen, toggleSplash } = props;
    return (
        <Dialog
            fullScreen
            open={isOpen}
            TransitionComponent={Transition}>

            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={1}>
                        <ChevronLeftRounded className={classes.back} onClick={toggleSplash('isLoginSplash')} />
                    </Grid>
                    <Grid item xs={10} align="center">
                        <Typography className={classes.title} variant="h5" gutterBottom>
                            Log in
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    <Grid item xs={12} align="center">
                        <TextField required error id="email" label="Email" className={classNames(classes.textField)} />
                    </Grid>

                    <Grid item xs={12} align="center">
                        <TextField required error id="password" type="password" label="Password" className={classNames(classes.textField)} />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            <Switch checked={true} value="rememberme"  color="secondary" />
                            Remember me
                        </Typography>
                    </Grid>

                    <Grid item xs={6} align="center">
                        <Button color="secondary" className={classes.linkbutton}>Forgot password ?</Button>
                    </Grid>

                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="secondary" className={classNames(classes.button)}>
                            Log in
                        </Button>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button onClick={toggleSplash('isSignupSplash')} color="secondary" className={classes.linkbutton}>Don't have account ? Register here.</Button>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleSplash: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);