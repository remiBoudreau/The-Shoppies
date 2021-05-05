// React
import React, { useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
// Library for animations
import { motion } from "framer-motion";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Styles
import styles from "../styles/MovieList";
const useStyles = makeStyles((theme) => styles(theme));

export default function MovieSuggestions({
  addToast,
  addToNominations,
  isLoading,
  isMobile,
  movieList,
  nominations,
  setRightArrow,
}) {
  const classes = useStyles();
  // Display scroll indicator if element is scroll-able
  useEffect(() => {
    var movieSuggestions = document.getElementById("movieSuggestions");
    if (
      movieSuggestions !== null &&
      movieSuggestions.getBoundingClientRect().width > window.innerWidth
    ) {
      setRightArrow(true);
    } else {
      setRightArrow(false);
    }
  }, [movieList]);

  // movieList is null if suggestions not found from query
  if (!isLoading) {
    try {
      return (
        <div className={classes.movieSuggestionsWrapper}>
          <div className={classes.root} id="movieSuggestionsContainer">
            <GridList
              className={classes.gridListOne}
              cols={2.5}
              // Scroll wheel activates scrollX
              onWheel={(e) => {
                e.preventDefault();
                var movieSuggestions = document.getElementById(
                  "movieSuggestions"
                );
                var movieSuggestionsPos = document.getElementById(
                  "movieSuggestions"
                ).scrollLeft;
                movieSuggestions.scrollTo({
                  top: 0,
                  left: movieSuggestionsPos + e.deltaY,
                  behaviour: "smooth",
                });
                if (movieSuggestionsPos > 0) {
                  setRightArrow(false);
                }
              }}
              id="movieSuggestions"
            >
              {/* Array of Movie Suggestion Components */}
              {movieList.map((movie, i) => (
                <GridListTile
                  classes={{
                    tile: classes.tileOne,
                  }}
                  // Material forces dims when assigned through class
                  style={{ height: "50vh", width: "30.9vh" }}
                  key={movie.image}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { duration: 0.05 },
                    }}
                    className={classNames(
                      classes.nominationsIconWrap,
                      isMobile ? classes.iconTopLeft : null
                    )}
                  >
                    ;
                    <Tooltip title={"Nominate"} aria-label="add">
                      <IconButton
                        onClick={() => {
                          addToNominations(movie, nominations, addToast);
                        }}
                      >
                        <AddIcon style={{ color: "black" }} />
                      </IconButton>
                    </Tooltip>
                  </motion.div>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    // Zoom in/out on mouse in/out
                    onMouseOver={(event) => {
                      event.target.classList.remove(classes.imgDown);
                      event.target.classList.remove(classes.sizeDown);
                      event.target.classList.add(classes.sizeUp);
                      event.target.classList.add(classes.imgUp);

                      document
                        .getElementById(movie.id)
                        .classList.add(classes.titleBarExpanded);
                    }}
                    onMouseOut={(event) => {
                      event.target.classList.remove(classes.imgUp);
                      event.target.classList.remove(classes.sizeUp);
                      event.target.classList.add(classes.sizeDown);
                      event.target.classList.add(classes.imgDown);

                      document
                        .getElementById(movie.id)
                        .classList.remove(classes.titleBarExpanded);
                    }}
                  />
                  <div className={classes.loadingContainer}>
                    <CircularProgress
                      classes={{ colorPrimary: classes.loading }}
                    />
                  </div>
                  <GridListTileBar
                    id={movie.id}
                    title={movie.title}
                    subtitle={
                      <div>
                        <span
                          className={classes.year}
                        >{`(${movie.year})`}</span>
                        <div className={classes.overviewWrapper}>
                          <p className={classes.overview}>{movie.overview}</p>
                        </div>
                      </div>
                    }
                    classes={{
                      root: classNames(
                        classes.titleBarOne,
                        isMobile ? classes.mobileTitleBarOne : null
                      ),
                      title: classNames(
                        classes.titleOne,
                        isMobile ? classes.mobileTitle : null
                      ),
                      titleWrap: isMobile ? classes.mobileTitleWrapOne : null,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      );
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
}
