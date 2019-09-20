import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Articles from "../components/Articles"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import basicTheme from "../themes/basic"
import { ThemeContext } from "../themes/themeContext"

class PortfolioIndex extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={basicTheme}>
        <Layout>
          <SEO title="Vladimir Ivanov" />
          <Hero />
          <About />
          <Articles />
          <Projects />
          <Contact />
        </Layout>
      </ThemeContext.Provider>
    )
  }
}


export default PortfolioIndex
