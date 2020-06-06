import React from 'react';
import PropTypes from 'prop-types'; 
import urlPropType from 'url-prop-type'; 

import {CardContent, Typography} from '@material-ui/core';


const LinkCardContent = (props) => {
    
  return (
    <CardContent> 
      <Typography 
        className={props.classes.title} 
        color="textSecondary" 
        gutterBottom
      > 
        {props.title}
      </Typography> 
      {
        props.sites && props.sites.map((site, i) => {
          return (
            <div key={i}>
                <Typography>
                  <a href={site.url} >{site.text}</a>
                </Typography>
                {
                  site.description && 
                    <Typography>
                        {site.description}
                    </Typography>                    
                }
            </div>
          )
        })
      }            
    </CardContent>
  );  
};

LinkCardContent.propTypes = {
    title: PropTypes.string.isRequired,
    sites: PropTypes.arrayOf(
      PropTypes.shape({
        url: urlPropType.isRequired,
        text: PropTypes.string.isRequired,
        description: PropTypes.text
      })
    ),
    classes: PropTypes.func
};

export default LinkCardContent;