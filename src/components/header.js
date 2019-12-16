import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
    <InnerContainer>
      <h1>
        <Title to="/">{siteTitle}</Title>
      </h1>      
    </InnerContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

const Container = styled.header`
  background: #72bfe5;
  
`
const InnerContainer = styled.div`
  padding: 1rem 1.0875rem;
`
const Title = styled(props => <Link {...props}/>)`
  text-decoration: none;
`
export default Header
