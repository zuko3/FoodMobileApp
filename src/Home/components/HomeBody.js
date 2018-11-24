import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function HomeBody(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem onClick={()=>props.history.push("/category")}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="BreakFast" secondary="Awsome food" />
        </ListItem>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Lunch" secondary="Awsome Food" />
        </ListItem>
        <ListItem>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
          <ListItemText primary="Dinner" secondary="Awsome Food" />
        </ListItem>
      </List>
    </div>
  );
}

HomeBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter( withStyles(styles)(HomeBody) );
