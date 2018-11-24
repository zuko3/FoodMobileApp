import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const styles = {
    card: {
        width: '100%',
        boxShadow: 'none',
        borderRadius: 0,
        border: '1px solid #e8e8e8'
    },
    content: {
        paddingTop: 13,
        paddingLeft: 16,
        paddingBottom: 20
    },
    media: {
        height: 180
    },
    title: {
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    body: {
        fontSize: '0.9rem',
        fontWeight: 'lighter'
    },
    tagIcon: {
        color: '#f50057',
        verticalAlign: 'middle'
    },
    starIcon: {
        fontSize: '0.9rem',
        color: 'white',
        verticalAlign: 'middle'
    },
    infoText: {
        fontWeight: 'lighter',
        fontSize: '0.9rem',
        paddingLeft: '5px',
        verticalAlign: 'middle'
    },
    info: {
        marginTop: '8px'
    },
    rating: {
        fontWeight: 'lighter',
        fontSize: '0.9rem',
        padding: '2px 5px 2px 5px',
        verticalAlign: 'middle',
        color: 'white',
        backgroundColor: '#f50057',
        borderRadius: '3px',
        float: 'right'
    }
};

function CategoryItemCard(props) {
    const { classes } = props;
    const { value } = props;
    let url = "";
    if (value === 0) { url = "https://www.w3schools.com/w3images/salmon.jpg" }
    else if (value === 1) { url = "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/noodles.jpg" }
    else if (value === 2) { url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qD2Y5sZohWwL_0LfVVqCCHOhcSP1xgDTRG32IeNxSfemliRD" }
    else if (value === 3) { url = "https://www.w3schools.com/w3images/salmon.jpg" }
    else if (value === 4) { url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qD2Y5sZohWwL_0LfVVqCCHOhcSP1xgDTRG32IeNxSfemliRD" }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={url}
                    title="image"
                />
                <CardContent className={classes.content}>
                    <Typography component="p" className={classes.title}>
                        Zaikedar Panner
                    </Typography>
                    <Typography component="p" className={classes.body}>
                        Serverd with Masala dal, roti chawal
                    </Typography>
                    <Typography component="p" className={classes.info}>
                        <span className={classes.infoText}>
                            &#x20b9;&nbsp;1,747
                        </span>
                        <span className={classes.rating}>
                            4.2&nbsp;&nbsp;<Icon className={classNames('fa fa-star', classes.starIcon)} />
                        </span>
                    </Typography>
                    <Typography component="p" className={classes.info}>
                        <span>
                            <Icon className={classNames('fa fa-tags', classes.tagIcon)} />
                        </span>
                        <span className={classes.infoText}>
                            Cash backs & more
                        </span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CategoryItemCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryItemCard);


