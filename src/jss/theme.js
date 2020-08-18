const primaryHighlightColor = "#24A3CC";
const secondaryHighlightColor = "#fa8072";
const white = "#FFF";
const black = "#111";
const textDark = "#222"

const theme = {
  colors: {
    primaryHighlightColor: primaryHighlightColor,
    secondaryHighlightColor: secondaryHighlightColor,
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
      background: primaryHighlightColor,
      zIndex: "-1",
    },
    '&:hover': {
      '&:before': {
        background: secondaryHighlightColor,
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
    tabletScreen: "@media (min-width: 768px)",
    smallScreen: "@media (min-width: 640px)",
  },
}

export default theme
