// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Styles
import styles from "../styles/ScrollIndicator";
const useStyles = makeStyles(styles);

export default function ScrollIndicator({
  toggleMovieSuggestions,
  rightArrow,
}) {
  const classes = useStyles();

  return (
    <div
      className={
        toggleMovieSuggestions ? classes.indicatorShow : classes.indicatorHide
      }
    >
      {/* Scroll Indicators */}
      {rightArrow ? (
        <div className={classes.rightIndicator} id="rightIndicator">
          <div className={classNames(classes.arrow, classes.arrowOne)}></div>
          <div className={classNames(classes.arrow, classes.arrowTwo)}></div>
          <div className={classNames(classes.arrow, classes.arrowThree)}></div>
        </div>
      ) : null}
    </div>
  );
}
