// React
import React, { useRef, Fragment } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import RemoveIcon from "@material-ui/icons/Remove";
import Divider from "@material-ui/core/Divider";
// Library for animations
import { motion } from "framer-motion";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Swipe registering
import { useSwipeable } from "react-swipeable";
// Styles
import styles from "../styles/MovieList";
const useStyles = makeStyles((theme) => styles(theme));

export default function MovieNominations({
  addToast,
  deleteFromNominations,
  isMobile,
  nominations,
}) {
  const classes = useStyles();

  // Variables for touch functionality
  const priorDeltaX = useRef();
  const newTouch = useRef();
  // Material Ui Component Blocking Left/Right Swiping Fix
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.initial[0] !== newTouch.current) {
        priorDeltaX.current = 0;
        newTouch.current = eventData.initial[0];
      }
      var movieNominations = document.getElementById("movieNominations");
      var movieNominationsX = document.getElementById("movieNominations")
        .scrollLeft;
      movieNominations.scrollTo({
        top: 0,
        left: movieNominationsX - (eventData.deltaX - priorDeltaX.current),
        behaviour: "smooth",
      });
      priorDeltaX.current = eventData.deltaX;
    },
  });
  return (
    <div className={classes.root}>
      {nominations.length > 0 ? (
        <GridList
          className={classes.gridListTwo}
          cols={2.5}
          // Scroll wheel activates scrollX
          onWheel={(e) => {
            e.preventDefault();
            var movieNominations = document.getElementById("movieNominations");
            var movieNominationsX = document.getElementById("movieNominations")
              .scrollLeft;
            movieNominations.scrollTo({
              top: 0,
              left: movieNominationsX + e.deltaY,
              behaviour: "smooth",
            });
          }}
          {...handlers}
          id="movieNominations"
        >
          {/* Array of Movie Nomination Components */}
          {nominations.map((movie, i) => (
            <Fragment>
              <div style={{ width: "40vh" }}>
                <div className={classes.tileWrap}>
                  <GridListTile
                    classes={{
                      root: classes.tileRoot,
                      tile: classes.tileTwo,
                    }}
                    // Material forces dims when assigned through class
                    style={{ height: "40vh", width: "24.7vh" }}
                    key={movie.image}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.05 },
                      }}
                      initial={{ x: "500" }}
                      animate={{ x: "0" }}
                      className={classes.nominationsIconWrap}
                    >
                      <Tooltip title={"Delete"} aria-label="add">
                        <IconButton
                          onClick={() => {
                            deleteFromNominations(movie, addToast);
                          }}
                          className={classNames(
                            classes.nominationsIconWrap,
                            isMobile ? classes.iconBottomRight : null
                          )}
                        >
                          <RemoveIcon style={{ color: "black" }} />
                        </IconButton>
                      </Tooltip>
                    </motion.div>
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className={classes.inFront}
                    />
                    <div className={classes.loadingContainer}>
                      <CircularProgress
                        classes={{ colorPrimary: classes.loading }}
                      />
                    </div>
                  </GridListTile>
                </div>
                <GridListTileBar
                  id={i}
                  title={movie.title}
                  subtitle={<span>{`(${movie.year})`}</span>}
                  classes={{
                    root: classes.titleBarTwo,
                    title: classNames(
                      classes.titleTwo,
                      isMobile ? classes.mobileTitle : null
                    ),
                    titleWrap: classNames(
                      classes.titleWrap,
                      isMobile ? classes.mobileTitleWrapTwo : null
                    ),
                  }}
                />
              </div>
              <Divider orientation="vertical" flexItem />
            </Fragment>
          ))}
        </GridList>
      ) : (
        <div className={classes.noneMessage}>
          <h2 className={classes.noneMessageText}>
            This is your nomination list. Nominated movies will appear here.
          </h2>
        </div>
      )}
    </div>
  );
}
