import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menu = () => (
    <Container>
        <Item>
            <Title to="/">Sobre</Title>
        </Item>
        <Item>
            <Title to="/">Portifólio</Title>
        </Item>
        <Item>
            <Title to="/">Contato</Title>
        </Item>         
    </Container>     
)

const Container = styled.ul`
    height:1vh;
    display:flex;
    justify-content:left;
    flex-direction:row;
`
const Item = styled.li`
    color: #78B2CF;
    font-weight:300;
    list-style:none;
`

const Title = styled(props => <Link {...props}/>)`
  text-decoration: none;
  text-transform: uppercase ;
  padding:0 0.4em 0 0;
`

export default Menu

