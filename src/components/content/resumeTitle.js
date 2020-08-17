import React from "react"
import { createUseStyles } from "react-jss"
import { resumeTitleStyle } from "../../jss/components/content/resumeTitleStyle"

const useStyles = createUseStyles(resumeTitleStyle)

export default function Header() {
  const classes = useStyles()
  return <div className={classes.titleContainer}></div>
}
