import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme, Theme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const theme: Theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto,"Noto Sans JP","Helvetica Neue",Meiryo,sans-serif'
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
