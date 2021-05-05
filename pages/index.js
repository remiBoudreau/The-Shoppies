// React
import { useState, useEffect, Fragment } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Custom Components
import MovieDrawer from "../components/MovieDrawer";
import CustomHeaders from "../components/CustomHeaders";
import MovieForm from "../components/MovieForm";
import ScrollIndicator from "../components/ScrollIndicator";
import MovieSuggestions from "../components/MovieSuggestions";
import MovieInstructions from "../components/MovieInstructions";
// Library for animations
import { motion } from "framer-motion";
// Toasts
import { useToasts } from "react-toast-notifications";
// Redux-persist local state actions/reducers
import { connect } from "react-redux";
import {
  addToNominations,
  deleteFromNominations,
} from "../redux/actions/nominationsActions";
import { onVisit } from "../redux/actions/visitActions";
// Styles
import styles from "../styles/Home";
const useStyles = makeStyles((theme) => styles(theme));

function Home({
  nominations,
  addToNominations,
  deleteFromNominations,
  visit,
  onVisit,
}) {
  const classes = useStyles();
  const { addToast } = useToasts();

  const [bgArr, setBgArr] = useState(["", "/bg.jpg"]);
  const [movie, setMovie] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [open, setOpen] = useState(false);
  const [formFocus, setFormFocus] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messageShow, setMessageShow] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typeTimeout, setTypeTimeout] = useState(false);

  //  Routines to run when componentDidMount on client
  useEffect(() => {
    // Disable scroll
    document.querySelector("body").style.overflow = "hidden";
    // Determine viewport width for determining mobile or desktop environment
    window.mobileAndTabletCheck = function () {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
    
    setIsMobile(window.mobileAndTabletCheck());
  }, []);

  // Nominations has updated
  useEffect(() => {
    // Mobile requires larger text
    if (isMobile) {
      document.querySelector(".react-toast-notifications__container").classList.add(classes.toastFont)
      document.querySelector(".react-toast-notifications__container").style.top = "10%"
    }
    
    if (nominations.length > 0) {
      const fadeTime = 3000;
      var newBgArr;
      // Cross-fade to new background
      newBgArr = bgArr.concat(nominations[nominations.length - 1].bg);
      if (nominations.length === 5) {
        newBgArr = bgArr.concat("/bg.jpg");
      }
      newBgArr.shift();
      setBgArr(newBgArr);
      document.getElementById("forwardBg").classList.add(classes.fadeIn);
      setTimeout(function () {
        document.getElementById("forwardBg").classList.remove(classes.fadeIn);
      }, fadeTime);
    }
  }, [nominations]);

  // Text-box input has updated
  useEffect(() => {
    // Call API
    if (movie.length > 2) {
      // Trigger message (for Mobile Users)
      if (!messageShow) {
        setMessageShow(true);
      }
      // Fetch if text-box has query term
      if (typeof movie !== "undefined" && movie.length > 0) {
        fetch("/api/fetchSuggestions", {
          method: "post",
          body: movie,
        })
          .then((response) => response.json())
          .then(({ suggestions }) => {
            if (suggestions === null) {
              setHelperText(
                "Sorry! We couldn't find any information on movies using the search term: '" +
                  movie +
                  "'."
              );
            } else {
              setHelperText("");
            }
            setMovieList(suggestions);
            setIsLoading(false);
          })
          .catch(() => {
            addToast("Oops! Something Went Wrong", {
              appearance: "error",
              autoDismiss: true,
            });
          });
      }
    }
  }, [movie]);

  // Text-box has characters
  var toggleMovieSuggestions =
    movie.length > 2 && formFocus && !(nominations.length === 5);

  return (
    <Fragment>
      <MovieInstructions
        isMobile={isMobile}
        messageShow={messageShow}
        onVisit={onVisit}
        visit={visit}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={messageShow && !visit && isMobile ? classes.blur : null}
      >
        {/* Headers */}
        <CustomHeaders
          isMobile={isMobile}
          nominations={nominations}
          toggleMovieSuggestions={toggleMovieSuggestions}
        />
        {/* Bg Images */}
        <img className={classes.movieBg} src={bgArr[0]} />
        <img
          id="forwardBg"
          className={classes.movieBg}
          src={bgArr[1]}
        />

        {/* Movie Drawer */}
        <MovieDrawer
          addToast={addToast}
          deleteFromNominations={deleteFromNominations}
          isMobile={isMobile}
          nominations={nominations}
          open={open}
          setOpen={setOpen}
        />

        {/* Movie Form */}
        <MovieForm
          addToast={addToast}
          addToNominations={addToNominations}
          helperText={helperText}
          isMobile={isMobile}
          movieList={movieList}
          nominations={nominations}
          setFormFocus={setFormFocus}
          setHelperText={setHelperText}
          setIsLoading={setIsLoading}
          setMovie={setMovie}
          setMovieList={setMovieList}
          setTypeTimeout={setTypeTimeout}
          toggleMovieSuggestions={toggleMovieSuggestions}
          typeTimeout={typeTimeout}
        />
        {/* Scroll Indicator */}
        <ScrollIndicator
          toggleMovieSuggestions={toggleMovieSuggestions}
          rightArrow={rightArrow}
        />
        {/* Movie Suggestions */}
        <MovieSuggestions
          addToast={addToast}
          addToNominations={addToNominations}
          isLoading={isLoading}
          isMobile={isMobile}
          movieList={movieList}
          nominations={nominations}
          setRightArrow={setRightArrow}
        />
      </motion.div>
    </Fragment>
  );
}

// Redux State
const mapStateToProps = (state) => {
  return {
    nominations: state.nominations,
    visit: state.visit,
  };
};

// Redux Actions
const mapDispatchToProps = (dispatch) => {
  return {
    addToNominations: (nomination, nominations, addToast) => {
      dispatch(addToNominations(nomination, nominations, addToast));
    },
    deleteFromNominations: (nomination, addToast) => {
      dispatch(deleteFromNominations(nomination, addToast));
    },
    onVisit: () => {
      dispatch(onVisit());
    },
  };
};

// Redux HOC Wrapper
export default connect(mapStateToProps, mapDispatchToProps)(Home);
