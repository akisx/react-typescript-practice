import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme, StyleRules } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme: StyleRules = createMuiTheme({
  typography: {
    fontFamily: '"Noto Sans JP",Roboto,"Helvetica Neue",Arial,sans-serif'
  }
});

const ThemeApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<ThemeApp />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
