// React
import { Fragment } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// Library for animations
import { motion } from "framer-motion";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Styles
import styles from "../styles/MovieInstructions";
const useStyles = makeStyles(styles);

export default function MovieInstructions({
  isMobile,
  messageShow,
  onVisit,
  visit,
}) {
  const classes = useStyles();

  if (messageShow && !visit && isMobile) {
    return (
      <Fragment>
        <div className={classes.overlayBg} />
        <div className={classes.closeIconWrapper}>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.05 },
            }}
          >
            <IconButton
              onClick={() => {
                onVisit();
              }}
              style={{ background: "white" }}
            >
              {/* Close Icon */}
              <CloseIcon
                className={classNames(
                  isMobile ? classes.iconMobile : classes.iconDesktop
                )}
              />
            </IconButton>
          </motion.div>
        </div>
        <motion.div>
          <div className={classes.overlayContainer}>
            <h1>
              {" "}
              Tap on any of movie suggestion titles for a name and description.
            </h1>
          </div>
        </motion.div>
      </Fragment>
    );
    // Don't instruct users with nominations in local state. They don't need them.
  } else {
    return null;
  }
}
