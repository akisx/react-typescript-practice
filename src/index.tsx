import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

const ThemeApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<ThemeApp />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
