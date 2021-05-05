// React
import { Fragment } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
// Custom Components
import MovieNominations from "./MovieNominations";
// Library for animations
import { motion } from "framer-motion";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Material UI Icons
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import Filter4Icon from "@material-ui/icons/Filter4";
import Filter5Icon from "@material-ui/icons/Filter5";
// Styles
import styles from "../styles/MovieDrawer";
const useStyles = makeStyles(styles);

export default function MovieDrawer({
  addToast,
  deleteFromNominations,
  isMobile,
  nominations,
  open,
  setOpen,
}) {
  const classes = useStyles();
  const list = () => (
    <div role="presentation">
      <List>
        {/* Nominations */}
        <MovieNominations
          addToast={addToast}
          deleteFromNominations={deleteFromNominations}
          isMobile={isMobile}
          nominations={nominations}
        />
      </List>
    </div>
  );

  return (
    <Fragment>
      {/* Drawer Toggle Button */}
      <div className={classes.drawerIconWrapper}>
        <motion.div
          whileHover={{
            scale: 1.12,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.05 },
          }}
        >
          <Tooltip title={"Nominations"} aria-label="add">
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
              style={{ background: "white" }}
            >
              {/* Icon reflects number of nominations */}
              {nominations.length === 0 ? (
                <FilterNoneIcon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : nominations.length === 1 ? (
                <Filter1Icon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : nominations.length === 2 ? (
                <Filter2Icon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : nominations.length === 3 ? (
                <Filter3Icon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : nominations.length === 4 ? (
                <Filter4Icon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : nominations.length === 5 ? (
                <Filter5Icon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              ) : (
                <FilterNoneIcon
                  className={classNames(
                    isMobile ? classes.iconMobile : classes.iconDesktop,
                    classes.animateShake
                  )}
                />
              )}
            </IconButton>
          </Tooltip>
        </motion.div>
      </div>
      {/* Drawer Contents */}
      <SwipeableDrawer
        anchor={"top"}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        classes={{
          paper: classes.glass,
        }}
      >
        {list()}
      </SwipeableDrawer>
    </Fragment>
  );
}
