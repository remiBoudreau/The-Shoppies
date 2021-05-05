const fadeTime = 3000;
const homeStyle = (theme) => {
  return {
    fadeIn: {
      animation: `$fadeIn ${fadeTime}ms ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
    movieBg: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "100vh",
      width: "100vw",
      objectFit: "cover",
      zIndex: "-1",
    },
    toastFont: {
      "& div": {
          fontSize: "30px",
      },
    }
  };
};

export default homeStyle;
