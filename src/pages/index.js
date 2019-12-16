import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá galera da Twitch </h1>      
    <Link to="/page-2/">Página 2</Link>
  </Layout>
)

export default IndexPage
