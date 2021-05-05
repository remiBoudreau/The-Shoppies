const movieInstructions = {
  iconMobile: {
    fontSize: "300%",
    color: "black",
  },
  iconDesktop: {
    fontSize: "2em",
    color: "black",
  },
  closeIconWrapper: {
    position: "absolute",
    top: "1.5%",
    right: "3%",
    zIndex: "11",
  },
  overlayBg: {
    zIndex: "10",
    opacity: "0.5",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    background: "black",
  },
  blur: {
    filter: "blur(5px)",
  },
  overlayContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    zIndex: "10",
    color: "white",
  },
};

export default movieInstructions;
