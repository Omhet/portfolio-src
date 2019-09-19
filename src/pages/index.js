import React from "react"
import ThemeProvider from "cxs/ThemeProvider"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Articles from "../components/Articles"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import basicTheme from "../themes/basic"

class BlogIndex extends React.Component {
  render() {
    return (
      <ThemeProvider theme={basicTheme}>
        <Layout>
          <SEO title="Vladimir Ivanov" />
          <Hero />
          <About />
          <Articles />
          <Projects />
          <Contact />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default BlogIndex
