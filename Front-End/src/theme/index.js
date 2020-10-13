import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#22303c',
      default: '#ffffff',
      paper: '#22303c'
    },
    primary: {
      main: '#15202b'
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      secondary:'#8899ac'
    }
  },
  shadows,
  typography
});

export default theme;
