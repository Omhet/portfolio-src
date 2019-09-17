import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Hero = () => {
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
        <div
        >
            <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt={author}
            />
        </div>
    )
}

export default Hero;
