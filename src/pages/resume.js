import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { ThemeProvider } from "react-jss"

import Header from "../components/header"
import Content from "../components/content"
import Footer from "../components/footer"
import theme from "../jss/theme"

export default function Resume() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}
