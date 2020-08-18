const primary = "#74E2FF"
const primaryDark = "#24A3CC"
const secondary = "#fa8072"
const white = "#FFF"
const black = "#111"
const textDark = "#222"
const gray = "#DDD"

const theme = {
  colors: {
    primary: primary,
    primaryDark: primaryDark,
    secondary: secondary,
    white: white,
    black: black,
    textDark: textDark,
    gray: gray,
  },
  fontBase: {
    fontFamily: "Lato, Helvetica, Arial, sans-serif",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "1.5em",
    color: textDark,
  },
  linkStyle: {
    textDecoration: "none",
    color: textDark,
    position: "relative",
    display: "inline-block",
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0.2em",
      width: "100%",
      height: 2,
      background: primary,
      zIndex: "-1",
    },
    "&:hover": {
      "&:before": {
        background: secondary,
      },
    },
  },
  contentContainer: {
    width: "80%",
    maxWidth: 900,
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
