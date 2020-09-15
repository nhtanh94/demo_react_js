import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f7c7cf",
      main: "#f38b9c",
      dark: "#f3556f",
    },
    secondary: {
      main: "#00ff00",
    },
    background: {
      grey: {},
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
      red: "#ff0000",
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight7: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight7: 600,
    },
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
  },
  breakpoints: {},
  spacing: 10,
});
export default theme;
