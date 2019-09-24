import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { injectStyle } from "../utils/injectStyle"

const Hero = ({ classes }) => {
    const data = useStaticQuery(graphql`
    query HeroQuery {
      avatar: file(absolutePath: { regex: "/me.jpg/" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
            }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

    const { author } = data.site.siteMetadata
    return (
        <section className={classes.container}>
            <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt={author}
            />
        </section>
    )
}

const style = () => ({
  container: {
    display: 'block',
  }
})

export default injectStyle(style)(Hero)
