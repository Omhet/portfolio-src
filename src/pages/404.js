import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import basicTheme from "../themes/basic"
import { ThemeContext } from "../themes/themeContext"

class NotFoundPage extends React.Component {
  render() {

    return (
      <ThemeContext.Provider value={basicTheme}>
        <Layout>
          <SEO title="404: Not Found" />
          <Link to="/" >Back home</Link>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
      </ThemeContext.Provider>

    )
  }
}

export default NotFoundPage
