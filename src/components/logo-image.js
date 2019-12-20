import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
        
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}

export default Image
