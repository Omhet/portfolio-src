import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Articles from "../components/Articles"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Vladimir Ivanov" />
        <Hero />
        <About />
        <Articles />
        <Projects />
        <Contact />
      </Layout>
    )
  }
}

export default BlogIndex