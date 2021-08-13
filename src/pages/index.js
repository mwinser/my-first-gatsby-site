
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          alt="Person standing below a huge starlit night sky"
          src="../images/stars.jpg"
        />
      </Layout>
  )
}

export default IndexPage