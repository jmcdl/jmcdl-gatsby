import React from "react"
import { createUseStyles } from "react-jss"
import { SectionStyles } from "../../jss/components/content/section-styles"

const useStyles = createUseStyles(SectionStyles)

function SectionBase(props) {
  const classes = useStyles()
  return (
    <div className={classes.sectionContainer}>
      <div className={classes.sectionTitleColumn}>
        <h3 className={classes.sectionTitleText}>{props.title}</h3>
      </div>
      <div className={classes.sectionContentColumn}>
        {props.children}
      </div>
    </div>
  )
}

export default SectionBase;
