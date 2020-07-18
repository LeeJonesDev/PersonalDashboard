import React from 'react';
import PropTypes from 'prop-types'; 

import {Card} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import {useStyles} from '../StyleClasses/CardStyles';

const DashboardCard = (props) => {
    const styles = useStyles();
    const handle = <FontAwesomeIcon icon={faGripHorizontal} className={`${styles.cardHandle} card-handle`}></FontAwesomeIcon>
    
    return (
        <Card 
            className={styles.root + " dashboard-card"} 
            variant={props.variant}
        >
            {handle}
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