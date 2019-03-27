import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName
} from "@material-ui/styles";
import { lightTheme, darkTheme, setPrismTheme } from "./prism";
import getTheme from "../styles/getTheme";
import { getCookie } from "../utils/helpers";
import { ACTION_TYPES } from "../constants";

const generateClassName = createGenerateClassName();

function themeSideEffect(reduxTheme) {
  setPrismTheme(reduxTheme.paletteType === "light" ? lightTheme : darkTheme);
  document.body.dir = reduxTheme.direction;
}

class AppWrapper extends React.Component {
  state = {};

  componentDidMount() {
    themeSideEffect(this.props.reduxTheme);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    const { reduxTheme } = this.props;

    const paletteType = getCookie("paletteType");
    const paletteColors = getCookie("paletteColors");

    if (
      (paletteType && reduxTheme.paletteType !== paletteType) ||
      (paletteColors &&
        JSON.stringify(reduxTheme.paletteColors) !== paletteColors)
    ) {
      this.props.dispatch({
        type: ACTION_TYPES.THEME_CHANGE,
        payload: {
          paletteType,
          paletteColors: paletteColors ? JSON.parse(paletteColors) : null
        }
      });
    }
  }

  componentDidUpdate() {
    themeSideEffect(this.props.reduxTheme);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (typeof prevState.theme === "undefined") {
      return {
        prevProps: nextProps,
        theme: getTheme(nextProps.reduxTheme)
      };
    }

    const { prevProps } = prevState;

    if (
      nextProps.reduxTheme.paletteType !== prevProps.reduxTheme.paletteType ||
      nextProps.reduxTheme.paletteColors !==
        prevProps.reduxTheme.paletteColors ||
      nextProps.reduxTheme.direction !== prevProps.reduxTheme.direction
    ) {
      return {
        prevProps: nextProps,
        theme: getTheme(nextProps.reduxTheme)
      };
    }

    return null;
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StylesProvider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  reduxTheme: PropTypes.object.isRequired
};

export default connect(state => ({
  reduxTheme: state.theme
}))(AppWrapper);
