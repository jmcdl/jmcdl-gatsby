import React from "react"
import PropTypes from "prop-types"
import { createUseStyles } from "react-jss"
import { HeadingStyles } from "../../jss/components/content/heading-styles"

const useStyles = createUseStyles(HeadingStyles)

function ResumeHeading(props) {
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
            rel="noopener noreferrer"
          >
            www.jmcdl.com
          </a>
        </li>
        <li>
          <a
            className={classes.listItemLink}
            href="mailto:james.mcdonell@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            james.mcdonell@outlook.com
          </a>
        </li>
        <li>0437 44 00 75</li>
      </ul>
    </div>
  )
}
ResumeHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default ResumeHeading;
