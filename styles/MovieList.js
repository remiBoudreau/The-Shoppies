const resizeTime = 500;
const movieSuggestionsHeight = 50;
const movieSuggestionsStyle = (theme) => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "transparent",
      height: "50vh",
    },
    gridListOne: {
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      width: "100vw",
    },
    gridListTwo: {
      overflow: "hidden",
      flexWrap: "nowrap",
      transform: "translateZ(0)",
      width: "100vw",
    },
    titleOne: {
      color: "white",
      fontSize: "2vh",
      overflow: "hidden",
      lineHeight: "unset",
    },
    titleTwo: {
      color: "white",
      lineHeight: "3vh",
    },
    tileRoot: {
      marginLeft: "150px",
      marginRight: "150px",
      padding: "0",
    },
    tileWrap: {
      justifyContent: "center",
      display: "flex",
    },
    tileOne: {
      borderRadius: "5px",
      "& .MuiGridListTile-imgFullHeight": {
        zIndex: "2",
      },
    },
    tileTwo: {
      borderRadius: "5px",
      overflow: "visible",
      "& .MuiGridListTile-imgFullHeight": {
        zIndex: "2",
      },
    },
    titleBarOne: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      transition: "height 1s",
      transform: "translateY(0.5em)",
      zIndex: "5",
    },
    mobileTitleBarOne: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      transition: "height 1s",
      transform: "translateY(1em)",
      zIndex: "5",
    },
    titleBarTwo: {
      background: "transparent",
      transition: "height 1s",
      zIndex: "5",
      margin: "0",
      position: "relative",
    },
    titleWrap: {
      textAlign: "center",
      margin: "0",
    },
    mobileTitleWrapOne: {
      height: "8vh",
      "& .MuiGridListTileBar-subtitle": {
        fontSize: "1.66vh",
      },
    },
    mobileTitleWrapTwo: {
      marginTop: "40px",
      "& .MuiGridListTileBar-subtitle": {
        fontSize: "1.66vh",
      },
    },
    mobileTitle: {
      fontSize: "2vh",
    },
    titleBarExpanded: {
      height: "90vh",
      pointerEvents: "none",
    },
    imgDown: {
      transform: "translateX(-50%) scale(1)",
    },
    imgUp: {
      transform: "translateX(-50%) scale(1.1)",
    },
    loadingContainer: {
      position: "absolute",
      top: "0%",
      zIndex: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    loading: {
      color: "white",
    },
    sizeUp: {
      animation: `$sizeUp ${resizeTime}ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes sizeUp": {
      "0%": {
        transform: "translateX(-50%) scale(1)",
      },
      "100%": {
        transform: "translateX(-50%) scale(1.1)",
      },
    },
    sizeDown: {
      animation: `$sizeDown ${resizeTime}ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes sizeDown": {
      "0%": {
        transform: "translateX(-50%) scale(1.1)",
      },
      "100%": {
        transform: "translateX(-50%) scale(1)",
      },
    },
    nominationsIconWrap: {
      position: "absolute",
      zIndex: "4",
      left: "75%",
      top: "0",
      "& .MuiButtonBase-root": {
        background: "white",
        transform: "translate(-15px, 10px)",
      },
    },
    iconTopLeft: {
      "& .MuiSvgIcon-root": {
        fontSize: "4vh",
      },
      left: "5%",
      top: "5%",
    },
    iconBottomRight: {
      "& .MuiSvgIcon-root": {
        fontSize: "4vh",
      },
      "& .MuiButtonBase-root": {
        background: "white",
      },
    },
    noneMessage: {
      position: "absolute",
      top: "50%",
      textAlign: "center",
    },
    noneMessageText: {
      color: "white",
      fontSize: "40px",
    },
    overview: {
      whiteSpace: "normal",
      paddingRight: "10px",
      fontSize: "2vh",
    },
    overviewWrapper: {
      height: "15em",
      position: "absolute",
    },
    movieSuggestionsWrapper: {
      height: `${movieSuggestionsHeight}vh`,
      zIndex: "0",
      background: "transparent",
    },
    year: {
      fontSize: "2vh",
    },
  };
};
export default movieSuggestionsStyle;
