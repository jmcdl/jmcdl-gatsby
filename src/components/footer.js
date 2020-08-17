import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles((theme) => ({
  navbar: {
    color: theme.white,
    backgroundColor: theme.black,
    width: '100%',
    // textAlign: "left"
  },
}))

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>Hello Footer</div>
  )
}

