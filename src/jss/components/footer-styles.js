const footerStyles = theme => ({
  footer: {
    ...theme.fontBase,
    fontSize: 14,
  },
  footerContent: {
    ...theme.contentContainer,
    display: "flex",
  },
  linkStyle: {
    ...theme.linkStyle,
  }
})

export { footerStyles };
