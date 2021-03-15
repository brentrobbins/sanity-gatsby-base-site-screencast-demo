import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

function SEO ({description, lang, meta, title, openGraphImage}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.sanitySiteSettings.seoSettings.description || data.site.siteMetadata.description
        const ogImage = openGraphImage && data.sanitySiteSettings.seoSettings.openGraphImage.asset.url
        const metaTitle = title || data.sanitySiteSettings.seoSettings.title || data.site.siteMetadata.title
        const pageURL = typeof window !== 'undefined' ? window.location.href : ''
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={metaTitle}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: metaTitle
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:image`,
                content: ogImage
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: metaTitle
              },
              {
                name: `twitter:description`,
                content: metaDescription
              },
              {
                property: `twitter:image`,
                content: ogImage
              },
              {
                property: `og:url`,
                content: pageURL
              },
              {
                property: `canonical`,
                content: pageURL
              }
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      seoSettings {
        title
        description
        openGraphImage {
          asset {
            path
            url
          }
        }
      }
    }
  }
`
