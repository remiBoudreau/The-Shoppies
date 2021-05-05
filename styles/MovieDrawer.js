const movieDrawerStyle = {
  glass: {
    backgroundColor: "rgba(255, 255, 255, .15)",
    backdropFilter: "blur(5px)",
  },
  "@keyframes shake": {
    "0%": {
      transform: "translate(1px, 1px) rotate(0deg)",
    },
    "10%": {
      transform: "translate(-1px, -2px) rotate(-1deg)",
    },
    "20%": {
      transform: "translate(-2px, 0px) rotate(1deg)",
    },
    "30%": {
      transform: "translate(2px, 2px) rotate(0deg)",
    },
    "40%": {
      transform: "translate(1px, -1px) rotate(1deg)",
    },
    "50%": {
      transform: "translate(-1px, 1px) rotate(-1deg)",
    },
    "60%": {
      transform: "translate(-2px, 1px) rotate(0deg)",
    },
    "70%": {
      transform: "translate(2px, 1px) rotate(-1deg)",
    },
    "80%": {
      transform: "translate(-1px, -1px) rotate(1deg)",
    },
    "90%": {
      transform: "translate(1px, 2px) rotate(0deg)",
    },
    "100%": {
      transform: "translate(1px, -2px) rotate(-1deg)",
    },
  },
  animateShake: {
    animation: `$shake 250ms`,
  },
  iconMobile: {
    fontSize: "300%",
    color: "black",
  },
  iconDesktop: {
    fontSize: "2em",
    color: "black",
  },
  drawerIconWrapper: {
    position: "absolute",
    top: "3%",
    right: "3%",
    zIndex: "1",
  },
};

export default movieDrawerStyle;
