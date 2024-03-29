import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo-image"

import styled from "styled-components"

import Menu from "../components/menu"
import Social from "../components/social"


const Header = ({ siteTitle }) => (
  <Container>
    <InnerContainer>
    
      <Title to="/"><Logo 
        styled="display:flex !important; 
        flex-direction:column;
        margin-right:8px;
        justify-content:center;"/>
        {siteTitle}
      </Title> 
    </InnerContainer>
    <Menu/>
    <Social/> 
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

const Container = styled.header`
  background: #154677;
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
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  color: #6EB3F7;
  font-family: 'Oswald' sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  text-rendering: optimizeLegibility;
  line-height: 44px;
  text-indent:44px;
  height:54px;
  text-transform: uppercase ;
  &:hover{
    color: #B6D9FB;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
`
export default Header
