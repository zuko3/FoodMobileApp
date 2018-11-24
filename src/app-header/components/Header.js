import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined';
import SwipeableDrawer from "../../nav-drawer/components/SwipeableDrawer";
import FullScreenDialog from "../../auth-form/Main";
import { withRouter } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        fontWeight: 'lighter'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    Profile: {
        fontSize: '1.7rem'
    },
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            authSplash: false
        };
    }

    toggleDrawer = (side, open) => () => this.setState({ [side]: open });

    toggleAuthSplash = () => this.setState({ authSplash: !this.state.authSplash })

    getMenuButton = (classes) => {
        const { location: { pathname }, history } = this.props;
        return pathname === "/"
            ? (
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon onClick={this.toggleDrawer('left', true)} />
                </IconButton>
            )
            : (
                <IconButton className={classes.menuButton} color="inherit" aria-label="Back">
                    <ArrowBack onClick={history.goBack} />
                </IconButton>
            )
    }

    getHeaderTitle = () => {
        const { location: { pathname }, history } = this.props;
        switch (pathname) {
            case "/":
                return "Foods";
            case "/category":
                return "Products List";
            case "/detail":
                return "Details";
            default:
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {this.getMenuButton(classes)}
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {this.getHeaderTitle()}
                        </Typography>
                        <PersonOutlineOutlined className={classes.Profile} onClick={this.toggleAuthSplash} />
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer toggleDrawer={this.toggleDrawer} isOpen={this.state.left} />
                <FullScreenDialog toggleAuthSplash={this.toggleAuthSplash} isOpen={this.state.authSplash} />
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));