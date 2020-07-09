import { makeStyles } from "@material-ui/core/styles";
import {StyleConstants} from "../Constants/StyleConstants"

export const useStyles = makeStyles(({
    root: {
      maxWidth: StyleConstants.Cards.maxCardWidth
    },
    title: {
      fontSize: StyleConstants.Cards.titleFontSize,
    },
    sites:{
        display:"flex"
    },
    apps: {
        display: "flex"
    },
    pathLink: {
        display: "flex",
        paddingRight: StyleConstants.General.basicPadding
    },
    hrefLink: {
        display: "flex",
        paddingRight: StyleConstants.General.basicPadding
    },
    linkIcon:{
        transform: "rotate(45deg)",  
        height: StyleConstants.Cards.linkRowHeight
    },
    siteFavicon:{
        maxHeight: StyleConstants.Cards.linkRowHeight
    },
    hrefLinkText:{
        display: "inline-flex",
        height: StyleConstants.Cards.linkRowHeight
    },
    AppDescription:{
        fontStyle: "italic",
        color: "darkgray",
        padding: 25
    },
    LinkDescription:{
        fontStyle: "italic",
        color: "darkgray",
        padding: 25
    },
    cardHandle:{
        color: "darkgray",
        float: "right",
        padding: "4px 4px 0 0"        
    }
}));