import React from "react"
import { createUseStyles } from "react-jss"
import { navbarStyles } from "../jss/components/navbar-styles"

const useStyles = createUseStyles(navbarStyles)

export default function Navbar() {
  const classes = useStyles()
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContent}>
        <ul className={classes.navButtons}>
          <li>
            <a
              className={classes.navButtonLink}
              href="https://www.linkedin.com/in/james-mcdonell-7bab8049/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={classes.navButtonLink}
              href="https://github.com/jmcdl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        {/*<ul className={classes.downloadButton}>*/}
        {/*  <li>*/}
        {/*    <a*/}
        {/*      className={classes.downloadButtonLink}*/}
        {/*      href="https://www.jmcdl.com/cv.pdf"*/}
        {/*      target="_blank"*/}
        {/*      rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*      Download*/}
        {/*      <span>(pdf)</span>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </nav>
  )
}
