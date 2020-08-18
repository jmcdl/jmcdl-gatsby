import React from "react"
import { createUseStyles } from "react-jss"
import { HeadingStyle } from "../../jss/components/content/headingStyle"

const useStyles = createUseStyles(HeadingStyle)

export default function Heading(props) {
  const classes = useStyles()
  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleColumn}>
        <h1 className={classes.titleText}>{props.title}</h1>
        <h2 className={classes.subtitleText}>{props.subtitle}</h2>
      </div>
      <ul className={classes.infoColumn}>
        <li>Adelaide, SA</li>
        <li>
          <a
            className={classes.listItemLink}
            href="http://www.jmcdl.com/"
            target="_blank"
          >
            www.jmcdl.com
          </a>
        </li>
        <li>
          <a
            className={classes.listItemLink}
            href="mailto:james.mcdonell@outlook.com"
            target="_blank"
          >
            james.mcdonell@outlook.com
          </a>
        </li>
      </ul>
    </div>
  )
}
