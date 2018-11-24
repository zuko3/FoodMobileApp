import React from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CategoryListContainer } from "./CategoryListContainer"

const CategoryList = {
    combo: [
        { id: 'rajdhani1', name: 'Zaikedar Panner1', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner2', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner3', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner4', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' }
    ],
    savoires: [
        { id: 'rajdhani1', name: 'Zaikedar Panner11', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner22', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner33', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner44', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' }
    ],
    desert: [
        { id: 'rajdhani1', name: 'Zaikedar Panner11', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner22', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner33', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner44', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' }
    ],
    starter: [
        { id: 'rajdhani1', name: 'Zaikedar Panner111', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner222', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner333', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner444', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' }
    ],
    main: [
        { id: 'rajdhani1', name: 'Zaikedar Panner1111', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner2222', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner3333', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' },
        { id: 'rajdhani1', name: 'Zaikedar Panner4444', description: 'Serverd with masaladal ,roti', price: '115', discount: 'NA' }
    ]
}


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8'
    },
    tabs: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 13,
        paddingTop: 13,
        fontWeight: '500'
    }
});

class Category extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const itemKey = (
            CategoryList
                && Object.keys(CategoryList).length > 0
                ? Object.keys(CategoryList)[value]
                : null
        );
        return (
            <div className={classes.root}>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    className={classes.tabsRoot}>
                    {CategoryList
                        && Object.keys(CategoryList).length > 0
                        && Object.keys(CategoryList).map((category, index) => <Tab key={index} label={category} className={classes.tabs} />)}
                </Tabs>
                <CategoryListContainer value={value} itemKey={itemKey} />
            </div>
        );
    }
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Category));