const scrollIndicatorStyle = {
  indicatorHide: {
    width: "100%",
    position: "relative",
    transform: "translateY(100vh)",
  },
  indicatorShow: {
    width: "100%",
    position: "relative",
    transform: "translateY(-5vh)",
  },
  leftIndicator: {
    position: "absolute",
    left: "5%",
    transform: "rotate(180deg)",
  },
  rightIndicator: {
    position: "absolute",
    right: "5%",
  },
  arrow: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderTop: "3px solid #fff",
    borderRight: "3px solid #fff",
    transform: "rotate(45deg)",
    animation: `$sequenceFade 2000ms infinite`,
  },
  arrowOne: {
    animationDelay: "-0.2s",
  },
  arrowTwo: {
    animationDelay: "-0.2s",
  },
  arrowThree: {},
  "@keyframes sequenceFade": {
    "0%": {
      opacity: "0",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
    },
  },
};

export default scrollIndicatorStyle;
