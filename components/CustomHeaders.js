// React
import { useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Library for animations
import { motion } from "framer-motion";
// Styles
import styles from "../styles/CustomHeaders";
const useStyles = makeStyles(styles);

export default function CustomHeaders({
  isMobile,
  nominations,
  toggleMovieSuggestions
}) {

  const classes = useStyles();
  // Fix fo Issue:
  // Overflow hidden required by animation when toggleMovieSuggestions DidUpdate
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (!toggleMovieSuggestions) {
        setTimeout(function () {
          document.querySelector("#animationsController").style.overflowY =
            "visible";
        }, 400);
      } else {
        setTimeout(function () {
          document.querySelector("#animationsController").style.overflowY =
            "hidden";
        }, 400);
      }
    }
  }, [toggleMovieSuggestions]);

  return (
    <div
      className={classNames(
        classes.headers,
        isMobile ? classes.mobileHeaders : null
      )}
      id="headers"
    >
      <motion.div
        id="animationsController"
        className={
          isMobile
            ? classes.headersContainer
            : toggleMovieSuggestions
            ? classNames(classes.animationWrap, classes.headersContainer)
            : classNames(classes.headersContainer, classes.overflowVisible)
        }
        initial={nominations.length === 5 ? { x: "0%" } : { x: "-100%" }}
        animate={nominations.length === 5 ? { x: "-100%" } : { x: "0%" }}
        transition={{ type: "anticipate", duration: 1, delay: 1 }}
      >
        <h1
          className={classNames(
            classes.shoppies,
            isMobile ? classes.mobileShoppies : null
          )}
        >
          THE SHOPPIES
        </h1>
        <motion.div
          initial={nominations.length === 5 ? null : { opacity: 0 }}
          animate={nominations.length === 5 ? null : { opacity: 1 }}
          transition={{ type: "easeIn", duration: 1, delay: 2 }}
        >
          <span
            className={classNames(
              classes.nominate,
              isMobile ? classes.mobileNominate : null
            )}
          >
            {" "}
            Nominate Your 5 Favourite Movies!{" "}
          </span>
        </motion.div>
      </motion.div>
      {nominations.length === 5 ? (
        <motion.div
          // className={classNames(classes.animationWrap)}
          initial={isMobile ? { x: "-100%", y: "-10vh" } : { x: "-100%", y: "-20vh" }}
          animate={isMobile ? { x: "0%", y: "-10vh" } : { x: "0%", y: "-20vh" }}
          transition={{
            type: "anticipate",
            stiffness: 50,
            duration: 1,
            delay: 2,
          }}
        >
          <h1
            className={classNames(
              classes.shoppies,
              isMobile ? classes.mobileShoppies : null
            )}
          >
            THANK YOU
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "easeIn", duration: 1, delay: 2 }}
          >
            <span
              className={classNames(
                classes.nominate,
                isMobile ? classes.mobileNominate : null
              )}
            >
              You've nominated 5 Movies
            </span>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
