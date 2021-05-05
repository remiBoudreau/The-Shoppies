// Customizing Next App
import App from "next/app";
// React
import { Fragment } from "react";
// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
// Redux
import { Provider } from "react-redux";
import withReduxStore from "../redux/withRedux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// Toast Notificatins
import { ToastProvider } from "react-toast-notifications";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Fragment>
        <ToastProvider placement="top-left" >
          <Provider store={reduxStore}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={this.persistor}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </Fragment>
    );
  }
}

export default withReduxStore(MyApp);
