import React from "react"

import styled from "styled-components"

const Footer = () => (
    <Container>
    <Copyright>© {new Date().getFullYear()}, TODOS OS DIREITOS RESERVADOS 
    {``} FABRÍCIO DUPIN</Copyright>
   
    </Container>     
)

const Container = styled.footer`
    background:#154677;
    padding:0 0.6vw;
    height:5vh;
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
`
const Copyright = styled.p`
    color: #B6D9FB;
    line-height:5vh;
    font-weight:500;
`

export default Footer

