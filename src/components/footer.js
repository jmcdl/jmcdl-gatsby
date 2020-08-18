import React from "react"
import { createUseStyles } from "react-jss"
import { footerStyles } from "../jss/components/footer-styles"

const useStyles = createUseStyles(footerStyles)

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footerContent}>
      <p className={classes.footer}>
        This resume was built using <a
        className={classes.linkStyle}
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Gatsby</a> and is hosted on <a
        className={classes.linkStyle}
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Netlify</a>. Check out
        the source code <a
        className={classes.linkStyle}
        href="https://www.github.com/jmcdl/jmcdl-gatsby"
        target="_blank"
        rel="noopener noreferrer"
      >here</a>.
      </p>
    </div>
  )
}
