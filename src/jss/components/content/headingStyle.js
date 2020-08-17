const HeadingStyle = theme => ({
  titleContainer: {
    marginTop: 64,
    marginBottom: 32,
    display: "flex",
  },
  titleColumn: {
    flex: 1,
    justifyContent: "flex-end",
  },
  infoColumn: {
    ...theme.fontBase,
    fontSize: "16px",
    flex: 5,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "flex-end",
    textAlign: "right",
    margin: 0,
    padding: 0,
  },
  titleText: {
    fontSize: "8vw",
    [theme.breakpoints.largeScreen]: {
      fontSize: "75px",
    },
    fontFamily: "Lato, 'Open Sans', Helvetica, Arial",
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.1,
    marginTop: 0,
    marginBottom: 0,
    textTransform: "uppercase",
    display: "flex",
    flexWrap: "wrap",
  },
  listItemLink: {
    ...theme.linkStyle,
  }
})

export { HeadingStyle }
