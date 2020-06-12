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
    LinkDescription:{
        fontStyle: "italic",
        color: "darkgray",
        padding: 25
    }
}));