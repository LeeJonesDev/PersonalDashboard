import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

import {Img} from 'react-image';
import LinkIcon from '@material-ui/icons/Link';
import {Typography} from '@material-ui/core';

import {useStyles} from '../StyleClasses/CardStyles';

const DashboardTypography = (props) => {
    const styles = useStyles();

    const getDomainUrl = (url) => {
        
        if (url.indexOf("//") > -1) {
            let parts = url.split('/');
            url = `${parts[0]}//${parts[2]}`;
            
             //remove port
            parts = url.split(':');
            url = `${parts[0]}:${parts[1]}`;
            
            // remove querystring params
            url = url.split('?')[0];
            
        }
       
        return url;
    }

    const SiteFavicon = () => {
        const domainUrl = getDomainUrl(props.url);
               
        return (
            <Suspense>            
                <Img src={`${domainUrl}/favicon.ico`} 
                    alt={domainUrl} 
                    className={styles.siteFavicon}
                    unloader={<LinkIcon className={styles.linkIcon} />}
                />
            </Suspense>
            )
      }


    return (
        <Typography
            {...props}
        >
            {props.url && (
                <a href={props.url}>
                    <SiteFavicon />
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