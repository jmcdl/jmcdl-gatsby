import React from 'react'
import { createUseStyles } from "react-jss"
import Heading from "./content/heading"

const useStyles = createUseStyles((theme) => ({
  contentContainer: {
    ...theme.contentContainer,
  }
}))

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <Heading title="James McDonell" subtitle="Full Stack Web Developer"/>
    </div>
  )
}
// Content.propTypes = {
//
// }
