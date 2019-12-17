import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./accordion.css"
import airbnb from "../images/airbnb-8972.jpg"
import mulherar from "../images/mulherar-amanda-6.jpg"
import musica from "../images/guttrol-2.jpg"

const Accordion = () => (
<section className="container">
    
    <div className="card">
    <CardLink to="/">
        <img alt="Arquitetura" src={airbnb}/>
        <div className="card__head">Arquitetura</div>
    </CardLink>
    </div>
    
    <div className="card">
        <CardLink to="/">
            <img alt="Ensaios Femininos" src={mulherar}/>
            <div className="card__head">Ensaios Femininos</div>
        </CardLink>
    </div>
    <div className="card">
        <CardLink to="/">
            <img alt="Música" src={musica}/>
            <div className="card__head">Música</div>
        </CardLink>
    </div>
  </section>
)

const CardLink = styled(props => <Link {...props}/>)`
  text-decoration: none;
  text-transform: uppercase ;
`

export default Accordion
