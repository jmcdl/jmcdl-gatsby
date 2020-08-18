import React from "react"
import "normalize.css"
import { ThemeProvider } from "react-jss"

import Navbar from "../components/navbar"
import Content from "../components/content"
import Footer from "../components/footer"
import theme from "../jss/theme"
import SEO from "../components/seo"

export default function Resume() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="James McDonell's Résumé"/>
      <Navbar />
      <Content />
      <Footer />
    </ThemeProvider>
  )
}
