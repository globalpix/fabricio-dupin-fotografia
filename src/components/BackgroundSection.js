import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 40) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`none`}
        >
        <Logo>Logo</Logo>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: auto;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`
const Logo = styled.h1`
  text-indent: "-99999px"
`

export default StyledBackgroundSection