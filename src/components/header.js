import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

import Menu from "../components/menu"
import Social from "../components/social"

const Header = ({ siteTitle }) => (
  <Container>
    <InnerContainer>
      
        <Title to="/">{siteTitle}</Title>      
           
    </InnerContainer>
    <Menu/>
    <Social/> 
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

const Container = styled.header`
  background: #72bfe5;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  padding: 0.4em 0 0 0.4em;
  align-items:center;
  
`
const InnerContainer = styled.div`
  
`
const Title = styled(props => <Link {...props}/>)`
  text-decoration: none;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  color: inherit;
  font-family: 'Oswald' sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
  text-transform: uppercase ;
`
export default Header
