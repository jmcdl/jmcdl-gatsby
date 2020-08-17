import React from 'react'
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles((theme) => ({
  navbar: {
    color: theme.white,
    backgroundColor: theme.black,
    width: '100%',
  },
}))

export default function Content() {
  const classes = useStyles();

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
// Content.propTypes = {
//
// }
