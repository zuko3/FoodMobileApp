import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    heroimage: {
        backgroundImage: 'url("/images/banner/FoodBanner.jpg")',
        backgroundColor: '#cccccc',
        height: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    }
};


const Banner = (props) => {
    const { classes } = props;
    return (
        <div className={classes.heroimage}>
        </div>
    )
}

export default withStyles(styles)(Banner);