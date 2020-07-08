import React from 'react';
import PropTypes from 'prop-types'; 

import {Card} from '@material-ui/core';

const DashboardCard = (props) => {

    return (
        <Card 
            className={props.classes} 
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