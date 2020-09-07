import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ab47bc",
      light: "#8e24aa",
      dark: "#af2cc5",
    },
    secondary: {
      main: "#00FF00",
    },
    warning: {
      main: "#ff9800",
      light: "#ffa726",
    },
    success: {
      main: "#4caf50",
      light: "#66bb6a",
    },
    error: {
      main: "#ef5350",
      light: "#ef5350",
    },
    info: {
      main: "#26c6da",
      light: "#00acc1",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    grey: {
      "100": "#dfdfdf",
    },
  },
});

const MUI: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUI;
