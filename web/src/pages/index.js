import React from 'react'
import {graphql} from 'gatsby'
import Home from '../components/HomePage/Home'
import Layout from '../containers/layout'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query sanityHome {
    sanityHome {
      title
      _rawContent
      seoSettings {
        title
        description
        openGraphImage {
          asset {
            url
          }
        }
      }
    }
  }
`

const PagePage = ({data: {sanityHome: page}}) => (
  <Layout title={page.title}>
    {page.seoSettings && page.seoSettings.title && page.seoSettings.description && (
      <SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage && page.seoSettings.openGraphImage.asset.url} />
    )}
    <Home content={page._rawContent} />
  </Layout>
)

export default PagePage
