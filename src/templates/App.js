import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './App.scss'
import './Main.scss'

import Header from '../organisms/Header/Header'
import Router from '../router';


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
  }
});

class App extends React.Component {
  
  render() { 
    return (
      <>
        <MuiThemeProvider> {/* theme={theme} */}
          <CssBaseline />
          <div className="App">
            { window.location.pathname !== '/login' && window.location.pathname !== '/cadastro' && window.location.pathname !== '/'  &&
              <Header />
            } 
            <React.Fragment>
              <Router />
              {this.props.children}
            </React.Fragment>
          </div>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App