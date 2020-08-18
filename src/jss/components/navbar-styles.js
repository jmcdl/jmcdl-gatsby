const navbarStyles = theme => ({
  navbar: {
    color: theme.colors.white,
    backgroundColor: theme.colors.black,
    textTransform: "uppercase",
    ...theme.fontBase,
    lineHeight: "3rem",
    fontSize: "11px",
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
      color: theme.colors.primary,
    },
  },
  downloadButton: {
    display: "none",
    listStyle: "none",
    margin: 0,
    padding: 0,
    backgroundColor: theme.colors.primaryDark,
    "&:hover": {
      backgroundColor: theme.colors.secondary,
    },
    [theme.breakpoints.largeScreen]: {
      display: "flex",
    },
  },
  downloadButtonLink: {
    textDecoration: "none",
    padding: "0 0.8rem",
    color: theme.colors.white,
  },
})

export { navbarStyles };
