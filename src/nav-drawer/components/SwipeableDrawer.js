import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

const sideList = (classes) => (
    <div className={classes.list}>
        <List>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </div>
);

const SwipeableTemporaryDrawer = (props) => {
    const { classes, isOpen, toggleDrawer } = props;
    return (
        <SwipeableDrawer
            open={isOpen}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {sideList(classes)}
        </SwipeableDrawer>
    );
}

SwipeableTemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};


export default withStyles(styles)(SwipeableTemporaryDrawer);