const SectionStyles = theme => ({
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 32,
    borderBottom: `1px solid ${theme.colors.gray}`,
    [theme.breakpoints.smallScreen]: {
      flexDirection: "row",
      width: "100%",
      marginTop: 64,
    },
  },
  sectionTitleColumn: {
    flex: 1,
    [theme.breakpoints.smallScreen]: {
      flexDirection: "row",
      width: "100%",
    },
  },
  sectionTitleText: {
    ...theme.fontBase,
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 0,
    marginTop: 20,
  },
  sectionSubheading: {
    margin: 0,
  },
  sectionContentColumn: {
    ...theme.fontBase,
    flex: 1,
    [theme.breakpoints.smallScreen]: {
      flex: 4,
    },
  },
  sectionList: {
    paddingLeft: 18,
  },
  strongText: {
    color: theme.colors.black,
    textShadow: `1px 1px 0 rgba(255, 255, 255, .4)`,
    fontWeight: 700,
    lineHeight: 1,
    position: "relative",
    display: "inline-block",
    paddingLeft: ".8rem",
    paddingRight: ".8rem",
    "& a": {
      textDecoration: "none",
      color: theme.colors.textDark,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      zIndex: "-1",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      borderRadius: ".2rem",
      backgroundColor: theme.colors.primary,
      transition: `all .8s .4s ease-in-out`,
    },
    "&:hover": {
      "&:before": {
        transform: `scale(1.05, 1.4)`,
        backgroundColor: theme.colors.primary,
        transitionDelay: "0s",
        transitionDuration: ".2s",
      },
    },
  },
  strongLink: {
    "&:hover": {
      "&:before": {
        backgroundColor: theme.colors.secondary,
      },
    },
  },
  linkStyle : {
    ...theme.linkStyle,
  },
  projectHeading: {
    ...theme.fontBase,
    fontSize: 18,
    fontWeight: 900,
    marginBottom: 0,
    marginTop: 20,
  }
})

export { SectionStyles }
