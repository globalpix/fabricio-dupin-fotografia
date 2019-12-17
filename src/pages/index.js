import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Accordion from "../components/accordion"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Accordion/>
  </Layout>
)

export default IndexPage
