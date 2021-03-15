import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../containers/layout'
import Page from '../components/PostPage/index'
import SEO from '../components/SEO/SEO'

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawContent
      publishedAt {
        local
        date: local(formatString: "MMMM Do, YYYY")
      }
      category {
        id
        title
        slug {
          current
        }
      }
      tags {
        id
        title
        slug {
          current
        }
      }
      mainImage {
        asset {
          fluid(maxWidth:650) {
            ...GatsbySanityImageFluid
          }
        }
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
const PostPage = ({data: {sanityPost: page}}) => (

  <Layout title={page.title}>
    {page.seoSettings && page.seoSettings.title && page.seoSettings.description &&
        (<SEO title={page.seoSettings.title} description={page.seoSettings.description} openGraphImage={page.seoSettings.openGraphImage ? page.seoSettings.openGraphImage.asset.url : null} />
        )}
    <Page
      mainImage={page.mainImage && page.mainImage.asset && page.mainImage}
      title={page.title}
      content={page._rawContent}
      date={page.publishedAt.date}
      category={page.category}
      tags={page.tags}
    />
  </Layout>
)

export default PostPage
