import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepOrange, green } from "@material-ui/core/colors";
import "typeface-poppins";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: green[50],
    },
    secondary: {
      main: deepOrange[500],
      contrastText: deepOrange[50],
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
