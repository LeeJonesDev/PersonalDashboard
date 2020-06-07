import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({
    root: {
      minWidth: 275,
      maxWidth: 750
    },
    title: {
      fontSize: 24,
    },
    sites:{
        display:"flex"
    },
    urlLink:{
        display: "inline-flex",
        paddingRight: 5,
           
    },
    linkIcon:{
        transform: "rotate(45deg)"  
    }
}));