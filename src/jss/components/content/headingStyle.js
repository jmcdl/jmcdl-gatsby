const HeadingStyle = theme => ({
  titleContainer: {
    marginTop: 64,
    marginBottom: 32,
    width: 250,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.smallScreen]: {
      flexDirection: "row",
      width: "100%",
    },
  },
  titleColumn: {
    flex: 1,
    justifyContent: "flex-end",
  },
  infoColumn: {
    ...theme.fontBase,
    fontSize: 14,
    flex: 5,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "flex-end",
    textAlign: "left",
    marginTop: 32,
    marginBottom: 16,
    padding: 0,
    [theme.breakpoints.smallScreen]: {
      textAlign: "right",
    },
    [theme.breakpoints.tabletScreen]: {
      fontSize: 16,
    },
  },
  titleText: {
    fontSize: 45,
    fontFamily: "Lato, 'Open Sans', Helvetica, Arial",
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.1,
    marginTop: 0,
    marginBottom: 0,
    textTransform: "uppercase",
    display: "flex",
    flexWrap: "wrap",
    textShadow: `4px 4px 0 ${theme.colors.primaryHighlightColor}`,
    transition: "text-shadow .2s ease-in-out",
    '&:hover': {
      textShadow: `-4px -4px 0 ${theme.colors.secondaryHighlightColor}`,
    },
    [theme.breakpoints.tabletScreen]: {
      fontSize: 58,
    },
    [theme.breakpoints.largeScreen]: {
      fontSize: 75,
    },
  },

  subtitleText: {
    fontSize: 18,
    borderTop: "4px solid",
    fontFamily: "Lato, 'Open Sans', Helvetica, Arial",
    fontWeight: 400,
    color: theme.black,
    letterSpacing: "0.1rem",
    marginTop: 16,
    marginBottom: 8,
    paddingTop: 10,
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.tabletScreen]: {
      borderTop: "6px solid",
      fontSize: 26,
    },
    [theme.breakpoints.largeScreen]: {
      fontSize: 32,
      borderTop: "8px solid",
    },
  },

  listItemLink: {
    ...theme.linkStyle,
  }
})

export { HeadingStyle }
