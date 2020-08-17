const primaryHighlight = "#24A3CC";
const secondaryHighlight = "#fa8072";
const white = "#FFF";
const black = "#111";
const textDark = "#222"

const theme = {
  colors: {
    primaryColor: primaryHighlight,
    secondaryColor: secondaryHighlight,
    white: white,
    black: black,
  },
  fontBase: {
    fontFamily: "Lato, Helvetica, Arial, sans-serif",
    fontSize: "12px",
    fontWeight: "300",
    lineHeight: "1.5em",
    color: textDark,
  },
  linkStyle: {
    textDecoration: "none",
    color: textDark,
    position: "relative",
    display: "inline-block",
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: "0.2em",
      width: '100%',
      height: '2px',
      background: primaryHighlight,
      zIndex: "-1",
    },
    '&:hover': {
      '&:before': {
        background: secondaryHighlight,
      },
    },
  },
  contentContainer: {
    width: "80%",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  breakpoints: {
    largeScreen: "@media (min-width: 1024px)",
    smallScreen: "@media (min-width: 768px)",
  },
}

export default theme
