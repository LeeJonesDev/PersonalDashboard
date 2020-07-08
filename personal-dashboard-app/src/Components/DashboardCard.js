import React from 'react';
import PropTypes from 'prop-types'; 

import {Card} from '@material-ui/core';
import {useStyles} from '../StyleClasses/CardStyles';

const DashboardCard = (props) => {
    const styles = useStyles();

    return (
        <Card 
            className={styles.root} 
            variant={props.variant}
        >
            {props.content}
        </Card>
    )
};

DashboardCard.propTypes = {
    content: PropTypes.element.isRequired,
    classes: PropTypes.func,
    variant: PropTypes.string
};

export default DashboardCard;