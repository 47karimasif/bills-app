import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: "#124c62",
      dark: "#4981a9", // Bill Button
      light: "#3c89a7", // New Button
    },
    common: {
      border: "#269dbf", // for borders
      filter: "#32626c", //bilder menu bg
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1500,
      xl: 1919,
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: "1.6",
    fontFeatureSettings: "'salt' on, 'liga' off",

    h1: {
      fontSize: "36px",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "32px",
        fontWeight: 700,
      },
      color: "white",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "28px",
        fontWeight: 700,
      },
      color: "white",
    },
    h3: {
      fontSize: "28px",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "24px",
        fontWeight: 700,
      },
      color: "white",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      [breakpoints.down("xs")]: {
        fontSize: "20px",
        fontWeight: 700,
      },
      color: "white",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 600,
      [breakpoints.down("xs")]: {
        fontSize: "18px",
        fontWeight: 700,
      },
      color: "white",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      [breakpoints.down("xs")]: {
        fontSize: "14px",
      },
      color: "white",
    },
    variantM1pping: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      body1: "p",
    },
  },
});

export default theme;
