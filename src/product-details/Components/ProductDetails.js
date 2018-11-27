import React from "react";
import Crousal from "./Crousal";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

const styles = {
  flex: {
    flex: 1,
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
    '&:active': {
      boxShadow: 'none'
    },
  },
  info: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 20,
    fontWeight: 'lighter'
  },
  title: {
    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
    fontWeight: 'lighter'
  },
  detailIcon: {
    marginTop: '-4px',
    marginRight: '10px'
  },
  pricesection: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 7,
    marginBottom: 7,
    fontWeight: 'medium'
  },
  discountprice: {
    fontSize: 18,
    color: 'gray'
  },
  off: {
    fontSize: 18,
    marginLeft: 15,
    color: 'green'
  },
  rating: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'lighter',
    padding: '2px 5px 2px 5px',
    verticalAlign: 'middle',
    color: 'white',
    backgroundColor: '#f50057',
    borderRadius: '3px',

  },
  starIcon: {
    fontSize: '1rem',
    color: 'white',
    verticalAlign: 'middle'
  },
  tagIcon: {
    color: '#f50057',
    marginRight: 6,
    verticalAlign: 'middle'
  },
};


export const ProductDetails = withStyles(styles)((props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} align="center">
            <Crousal />
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.title} variant="h4" gutterBottom>
              Product title - limited edition product
                        </Typography>
          </Grid>

          <Grid className={classes.pricesection} item xs={8}>
            <Typography variant="h5" gutterBottom>
              &#x20b9;&nbsp;1,747
                            <span className={classes.rating}>
                4.2&nbsp;&nbsp;<Icon className={classNames('fa fa-star', classes.starIcon)} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.discountprice} >
                <strike>&#x20b9;&nbsp;3,567.80</strike>
              </span>
              <span className={classes.off}>47% OFF</span>
            </Typography>
            <Typography className={classes.discountprice}>
              <span>
                <Icon className={classNames('fa fa-tags', classes.tagIcon)} />
              </span>
              <span className={classes.infoText}>
                Cash backs & more
                        </span>
            </Typography>
          </Grid>
          <Grid align="center">
            <Fab color="secondary" aria-label="Add" className={classes.margin}>
              <Icon className={classNames('fa fa-share-square-o')} />
            </Fab>
          </Grid>

          <Grid item xs={12} >
            <Typography className={classes.info} variant="h6" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the standard.
                        </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="secondary" className={classes.button}>
              <Icon className={classNames('fa fa-cart-plus', classes.detailIcon)} />
              Add to cart
                        </Button>
            <Button variant="contained" color="default" className={classes.button}>
              <Icon className={classNames('fa fa-remove', classes.detailIcon)} />
              Remove from cart
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
});
