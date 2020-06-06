import React from 'react';
import PropTypes from 'prop-types'; 
import urlPropType from 'url-prop-type'; 

import {CardContent} from '@material-ui/core';
import DashboardTypography from './DashboardTypography';

import {useStyles} from '../StyleClasses/CardStyles';


const DashboardCardContent  = (props) => {
  const styles = useStyles();

  return (
    <CardContent> 
      <DashboardTypography
        className={styles.title}    
        color={"textSecondary"} 
        gutterBottom
        text={props.title}
      /> 
      {
        props.sites && props.sites.map((site, i) => {
          return (
            <div key={i}>
                <DashboardTypography url={site.url} text={site.text} />
                {
                  site.description && 
                    <DashboardTypography text={site.description} color="textPrimary"/>                    
                }
            </div>
          )
        })
      }            
    </CardContent>
  );  
};

DashboardCardContent.propTypes = {
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

export default DashboardCardContent;