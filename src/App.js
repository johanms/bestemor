import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/Main.js'
import { blueGrey, indigo, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
          main: '#29b6f6',
        },
      },
  });

class App extends Component {
    render() {
        return (
        <MuiThemeProvider theme={theme}>
            <Main />
        </MuiThemeProvider>
        );
    }
}

export default App;
