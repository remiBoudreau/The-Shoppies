// Material UI
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
// Nodejs library that concatenates classes
import classNames from "classnames";
// Styles
import styles from "../styles/MovieForm";
const useStyles = makeStyles((theme) => styles(theme));

// Prevent refresh on "enter"
const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

export default function MovieForm({
  addToast,
  addToNominations,
  helperText,
  isMobile,
  movieList,
  nominations,
  setFormFocus,
  setHelperText,
  setIsLoading,
  setMovie,
  setMovieList,
  setTypeTimeout,
  toggleMovieSuggestions,
  typeTimeout,
}) {
  const classes = useStyles();

  const handleSubmit = preventDefault((event) => {
    // On enter add nomination if only one suggestion
    if (typeof movieList !== "undefined" && movieList.length === 1) {
      // Add nomination
      addToNominations(movieList[0], nominations, addToast);
      // Reset
      setHelperText("");
      setMovieList([]);
      setMovie("");
    } else {
      //Get value of text
      const movie = event.target[event.target.length - 1].value;
      // Provide helper textf
      setHelperText(
        "Sorry! There are too many suggestions for the movie '" +
          movie +
          "'. Please select the movie from the collection below."
      );
    }
  }, []);

  // User input has changed
  const handleChange = async (movie) => {
    if (typeTimeout) {
      clearTimeout(typeTimeout);
    }
    // Only fetch is user hasn't typed as behaviour of displaying suggestions is abruptly changed constantly without it.
    setTypeTimeout(
      setTimeout(function () {
        if (movie.length > 0) {
          setHelperText("");
          // OMDB requires 3 characters to search
          if (movie.length < 3) {
            setHelperText(`Enter ${3 - movie.length} more characters`);
          }
          setIsLoading(true);
          setMovie(movie.trim());
        } else {
          setHelperText("");
          setMovie("");
        }
      }, 500)
    );
  };

  return (
    <div
      className={
        toggleMovieSuggestions
          ? classNames(
              classes.formContainer,
              classes.resizeIn,
              classes.formMaxHeight
            )
          : classNames(classes.formContainer, classes.resizeOut)
      }
    >
      <div
        className={classNames(
          classes.boxToggle,
          isMobile ? classes.mobileBoxToggle : null
        )}
        onClick={() => {
          setFormFocus(false);
        }}
      />
      {!(nominations.length === 5) ? (
        <form
          className={classNames(
            isMobile ? classes.mobileForm : classes.desktopForm
          )}
          onSubmit={handleSubmit}
          id="movieForm"
          onFocus={() => {
            setFormFocus(true);
          }}
        >
          <div
            className={isMobile ? null : classNames(classes.textFieldWrapper)}
          >
            <TextField
              label="What movie would you like to nominate?"
              variant="filled"
              className={
                isMobile
                  ? classes.root
                  : classNames(classes.root, classes.animatedForm)
              }
              defaultValue=""
              helperText={helperText}
              style={{ width: "100%" }}
              onChange={(event) => {
                handleChange(event.target.value);
              }}
            />
          </div>
          {isMobile ? null : (
          <SearchIcon
          className={
            isMobile
              ? null
              : classNames(classes.search, classes.animatedSearch)
          }
        />
          )}
        </form>
      ) : null}
    </div>
  );
}
