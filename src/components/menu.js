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
            <Title to="/">Blog</Title>
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
    color: #6EB3F7;
    font-weight:300;
    list-style:none;
`

const Title = styled(props => <Link {...props}/>)`
    color: #6EB3F7;  
    text-decoration: none;
    text-transform: uppercase ;
    padding:0 0.4em 0 0;
    &:hover{
        color: #B6D9FB;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
`

export default Menu

