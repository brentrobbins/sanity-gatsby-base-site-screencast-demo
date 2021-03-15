import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query($slug: String!) {
    sanityPage(slug: { current: { eq: $slug } }) {
      title
      _rawContent
      slug {
        current
      }
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

const PagePage = ({data: {sanityPage: page}}) => (

  <Layout title={page.title}>
    {page.seoSettings && page.seoSettings.title && page.seoSettings.description &&
        (<SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage ? page.seoSettings.openGraphImage.asset.url : null} />
        )}
    <Page
      title={page.title}
      content={page._rawContent}
      slug={page.slug.current}
    />
  </Layout>
)

export default PagePage
