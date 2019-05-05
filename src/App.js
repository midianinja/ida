import React from 'react';
import Profile from './components/Profile/Page'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0a0a0a',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#181818',
    },
    type: "dark"
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Profile>
          </Profile>
        </div>
      </MuiThemeProvider>
    </>
  );
}

export default App;