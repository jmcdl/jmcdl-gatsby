const navbarStyle = theme => ({
  navbar: {
    color: theme.colors.white,
    backgroundColor: theme.colors.black,
    textTransform: "uppercase",
    ...theme.fontBase,
    lineHeight: "3rem",
    fontSize: "12px",
    letterSpacing: "0.1rem",
  },
  navbarContent: {
    ...theme.contentContainer,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.largeScreen]: {
      justifyContent: "space-between",
    },
  },
  navButtons: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navButtonLink: {
    textDecoration: "none",
    padding: "0 0.8rem",
    color: theme.colors.white,
    "&:hover": {
      color: theme.colors.primaryHighlightColor,
    },
  },
  downloadButton: {
    display: "none",
    [theme.breakpoints.largeScreen]: {
      display: "flex",
    },
    listStyle: "none",
    margin: 0,
    padding: 0,
    backgroundColor: theme.colors.primaryHighlightColor,
    "&:hover": {
      backgroundColor: theme.colors.secondaryHighlightColor,
    },
  },
  downloadButtonLink: {
    textDecoration: "none",
    padding: "0 0.8rem",
    color: theme.colors.white,
  },
})

export { navbarStyle };
