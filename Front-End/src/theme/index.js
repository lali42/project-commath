import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "linear-gradient(90deg, rgba(73,129,154,1) 0%, rgba(232,80,91,1) 100%)",
      default: '#000',
      paper: '#fff'
    },
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#0d415b'
    },
    text: {
      primary: '#000',
      secondary:'#E8505B'
    }
  },
  shadows,
  typography
});


export default theme;
