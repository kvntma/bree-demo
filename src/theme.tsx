import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    },
    background: {
      default: '#F0F1F4'
    }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    inter100: {
      fontSize: '1rem',
      fontWeight: 100
    },
    inter200: {
      fontSize: '1rem',
      fontWeight: 200
    },
    inter300: {
      fontSize: '1rem',
      fontWeight: 300
    },
    inter400: {
      fontSize: '1rem',
      fontWeight: 400
    },
    inter500: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    inter600: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    inter700: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    inter800: {
      fontSize: '1.5rem',
      fontWeight: 800
    },
    inter900: {
      fontSize: '1.5rem',
      fontWeight: 900
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  }
});

export default theme;

// additional custom declarations for extended properties

declare module '@mui/material/styles' {
  interface TypographyVariants {
    inter100: React.CSSProperties;
    inter200: React.CSSProperties;
    inter300: React.CSSProperties;
    inter400: React.CSSProperties;
    inter500: React.CSSProperties;
    inter600: React.CSSProperties;
    inter700: React.CSSProperties;
    inter800: React.CSSProperties;
    inter900: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    inter100?: React.CSSProperties;
    inter200?: React.CSSProperties;
    inter300?: React.CSSProperties;
    inter400?: React.CSSProperties;
    inter500?: React.CSSProperties;
    inter600?: React.CSSProperties;
    inter700?: React.CSSProperties;
    inter800?: React.CSSProperties;
    inter900?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    inter100: true;
    inter200: true;
    inter300: true;
    inter400: true;
    inter500: true;
    inter600: true;
    inter700: true;
    inter800: true;
    inter900: true;
  }
}
