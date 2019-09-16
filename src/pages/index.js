import React from "react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Vladimir Ivanov" />
        <Bio />
      </Layout>
    )
  }
}

export default BlogIndex