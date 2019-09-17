import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Vladimir Ivanov" />
        <Hero />
      </Layout>
    )
  }
}

export default BlogIndex