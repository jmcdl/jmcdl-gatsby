import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"
import React from "react"

const useStyles = createUseStyles(SectionStyles);

function SectionSubheader(props) {
  const classes = useStyles()
  return (
    <>
      <h4 className={classes.sectionTitleText}>{props.title}</h4>
      <p className={classes.sectionSubheading}>
        <a
          className={classes.linkStyle}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.company}
        </a>
        <span>, {props.location}</span>
      </p>
      <p className={classes.sectionSubheading}>{props.dateText}</p>
      {props.description && <p>{props.description}</p>}
    </>
  )
}

export default SectionSubheader;
