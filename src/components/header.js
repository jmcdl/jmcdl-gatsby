import React from "react"
import { createUseStyles } from "react-jss"
import { headerStyle } from "../jss/components/headerStyle"

const useStyles = createUseStyles(headerStyle)

export default function Header() {
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
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className={classes.navButtonLink}
              href="https://github.com/jmcdl/"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <ul className={classes.downloadButton}>
          <li>
            <a
              className={classes.downloadButtonLink}
              href="https://www.jmcdl.com/cv.pdf"
              target="_blank"
            >
              Download
              <span>(pdf)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
