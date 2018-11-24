import React from 'react';
import PropTypes from 'prop-types';
import CategoryItemCard from "./CategoryItemCard";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding:15
    }
});

const ListView = (props) => {
    const { classes } = props;
    const arr = [1,2,3,4,5,6,7,8,9]
    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                {arr.map((o)=>( <Grid item xs={6}><CategoryItemCard value={props.value}/></Grid>))}
            </Grid>
        </div>
    );
}

ListView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const CategoryListContainer = withStyles(styles)(ListView);