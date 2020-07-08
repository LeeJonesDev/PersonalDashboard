import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import axios from 'axios';

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

    const getUrlTypography = () => {
        return (
            <Typography {...props} >
                {props.url && (
                    <a href={props.url} className={styles.hrefLink} target={props.hreftarget}>
                        <SiteFavicon />
                        {props.text && (
                            <span className={styles.hrefLinkText}>{props.text}</span>
                        )}
                    </a>
                )}                   
                {props.description && (
                    <span className={styles.LinkDescription}>{props.description}</span>
                )}
            </Typography>
        )
    }
    const openFile = (e) =>{
        e.preventDefault();
        
        const path = e.currentTarget.getAttribute("data-path");
        const fileName = path.split('\\').pop().split('/').pop();
        const filePath = path.substring(0, path.lastIndexOf(fileName));
        
        axios.post("http://localhost:8080/exec", {
            fileName: fileName,
            filePath: filePath
        }, (res) =>{
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
    const getPathTypography = () => {
        return (
            <Typography {...props} className={styles.pathLink}>
                <a href={"#"} onClick={openFile} data-path={props.path}>
                    {props.text}
                </a>
                {props.description && (
                    <span className={styles.AppDescription}>{props.description}</span>
                )}
            </Typography>
        )
    }
    const getDefaultTypography = () => {
        return (
            <Typography {...props} >
                {props.text && (
                    <span className={styles.defaultText}>{props.text}</span>
                )}   
                {props.description && (
                    <span className={styles.defaultDescription}>{props.description}</span>
                )}
            </Typography>
        )
    }

    const getContentFromProps = () =>{
        if(props.url){
            return getUrlTypography();
        }
        else if(props.path){
            return getPathTypography();
        }
        else{
            return getDefaultTypography();
        }
    }

    return (
        getContentFromProps()        
    )
  };

export default DashboardTypography;

DashboardTypography.propTypes ={
    description: PropTypes.string,
    text: PropTypes.string.isRequired,
    url: urlPropType,
    path: PropTypes.string,
    hreftarget: PropTypes.string
};