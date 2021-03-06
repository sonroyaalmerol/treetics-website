import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import WimpyKidDialogueFont from 'fonts/WimpyKidDialogue.woff2';
import WimpyKidFont from 'fonts/WimpyKid.woff2';
import TreeticsFont from 'fonts/Treetics-Regular.woff2';

const WimpyKidDialogue = {
  fontFamily: 'WimpyKidDialogue',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${WimpyKidDialogueFont}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const WimpyKid = {
  fontFamily: 'WimpyKid',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${WimpyKidFont}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const Treetics = {
  fontFamily: 'Treetics',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${TreeticsFont}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default responsiveFontSizes(createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [WimpyKidDialogue, WimpyKid, Treetics],
      },
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    background: {
      default: "#fff"
    },
    lightBlue: {
      main: "#80cee1"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    button: {
      textTransform: "none"
    },
    h1: {
      fontSize: '5rem',
      fontFamily: 'Treetics'
    },
    h2: {
      fontFamily: 'Treetics'
    },
    h3: {
      fontFamily: 'Treetics'
    },
    h4: {
      fontFamily: 'Treetics'
    },
    h5: {
      fontFamily: 'Treetics'
    },
    h6: {
      fontFamily: 'Treetics'
    },
    body1: {
      fontFamily: 'WimpyKid',
      fontSize: '1.5rem'
    },
    fontFamily: 'WimpyKidDialogue',
    fontWeight: 400
  },
  spacing: 10
}), { factor: 4 });