import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import "@fontsource/poppins";

const AppTheme = createTheme({
    breakpoints: {
        values: {
            // xl: 1536,
            // lg: 1200,
            // md: 900,
            // sm: 600,
            // xs: 0,
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1368,
            xxl: 1980
        }
    },

    size: 10,
    spacing: 8,
    palette: {
        mode: 'light',
        background: {
            default: "hsl(0, 0%, 100%)",
        },
        primary: {
            main: colors.indigo[900],
            dark: colors.indigo[300],
            light: colors.indigo[100],
        },
        secondary: {
            main: colors.orange[900],
            dark: colors.orange[500],
            light: colors.orange[100]
        },
        info: {
            main: colors.teal[900],
            dark: colors.teal[500],
            light: colors.teal[100]
        },
        success: {
            main: colors.green[900],
            dark: colors.green[500],
            light: colors.green[100]
        },
        error: {
            main: colors.red[500],
            dark: colors.red[900],
            light: colors.red[50],
        },

        blue: '#131938',
        tintBlue: '#326EE6'
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontSize: 25,
        htmlFontSize: 30,
        h1: {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 400,
            fontSize: "1.650rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.2rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        body1: {
            fontFamily: "Poppins",
            fontWeight: '800',
            fontSize: "0.650rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "Poppins",
            fontWeight: '600',
            fontSize: "0.60rem",
            lineHeight: 1.33,
            letterSpacing: "0.01071em"
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        button: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
        },
        caption: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"

        },
        overline: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase"
        }
    },
    mixins: {
        toolbar: {
            minHeight: 60
        }
    },
    overrides: {
        MuiTableRow: {
            root: {
                height: 20,
            },
        },
        MuiTableCell: {
            root: {
                padding: '4px 8px',
                borderBottom: '1px solid #e0e0e0',
            },
        },
        MuiTableContainer: {
            root: {
                width: '100%',
            },
        },
    }
});



export default AppTheme;

