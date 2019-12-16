import React from "react"

import styled from "styled-components"

const Footer = () => (
    <Container>
    <Copyright>© {new Date().getFullYear()}, TODOS OS DIREITOS RESERVADOS 
    {``} FABRÍCIO DUPIN</Copyright>
   
    </Container>     
)

const Container = styled.footer`
    background:#00324c;
    height:5vh;
    display:flex;
    justify-content:center;
    flex-direction:row;
`
const Copyright = styled.p`
    color: #78B2CF;
    line-height:5vh;
    font-weight:500;
`

export default Footer

