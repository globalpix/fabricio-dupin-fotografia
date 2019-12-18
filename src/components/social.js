import React from "react"
import styled from "styled-components"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
  )

const Social = () => (
    <Container>

        <Item>
            <Anchor target="_blank" href="https://www.instagram.com/fabricio.dupin/"><FontAwesomeIcon icon={['fab', 'instagram']} /></Anchor>        
        </Item>
        <Item> 
            <Anchor target="_blank" href="https://www.facebook.com/fabricio.dupin.fotografia/"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></Anchor>
        </Item>
        <Item> 
            <Anchor target="_blank" href="https://wa.me/5524981609497?text=Olá!%20entrei%20pelo%20site"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></Anchor>
        </Item>   
    </Container>     
)

const Container = styled.ul`
    height:2vh;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
`
const Item = styled.li`
    color: #6EB3F7;
    font-weight:300;
    list-style:none;
    padding:0em 0.8em 0 0;
`

const Anchor = styled.a`
    color: #6EB3F7;
    text-decoration: none;
    text-transform: uppercase ;
    &:hover{
        color: #B6D9FB;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
`

export default Social

