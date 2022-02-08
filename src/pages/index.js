import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>Hello world !</p>
      <StaticImage
        alt="Kitten"
        src='https://image.posterlounge.fr/img/products/630000/629822/629822_poster_l.jpg'/>
      <StaticImage
        alt='puppy'
        src='../images/puppy.jpg'/>
    </Layout>  
  )
}

export default IndexPage