import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { TypographyOptions } from 'material-ui/styles/createTypography';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const typography: TypographyOptions = {
  fontFamily: '"Noto Sans JP",Roboto,"Helvetica Neue",Arial,sans-serif'
};

const theme = createMuiTheme({
  typography: typography
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
