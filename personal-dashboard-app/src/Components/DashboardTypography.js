import React from 'react';
import PropTypes from 'prop-types'; 
import urlPropType from 'url-prop-type'; 


import {Typography} from '@material-ui/core';

const LinkTypography = (props) => {
      
        return ( 
            <Typography
                {...props}
            >
                {props.url && <a href={props.url} >{props.text}</a>}
                {!props.url && props.text}
            </Typography>    
        )
  };

export default LinkTypography;

LinkTypography.propTypes ={
    text: PropTypes.string.isRequired,
    url: urlPropType
};