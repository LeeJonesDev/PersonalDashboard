import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

import LinkIcon from '@material-ui/icons/Link';
import {Typography} from '@material-ui/core';

import {useStyles} from '../StyleClasses/CardStyles';

const DashboardTypography = (props) => {
    const styles = useStyles();

    return (
        <Typography
            {...props}
        >
            {props.url && (
                <a href={props.url}>
                    <LinkIcon className={styles.linkIcon} />
                    {props.text}
                </a>
            )}
            {!props.url && props.text}
        </Typography>
    )
  };

export default DashboardTypography;

DashboardTypography.propTypes ={
    text: PropTypes.string.isRequired,
    url: urlPropType
};