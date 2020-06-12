import { makeStyles } from "@material-ui/core/styles";
import {StyleConstants} from "../Constants/StyleConstants"

export const GridStyles =  makeStyles(({
    layout: {
        marginTop: StyleConstants.Grid.gridTopMargin,
        position: "relative"
    }
}));