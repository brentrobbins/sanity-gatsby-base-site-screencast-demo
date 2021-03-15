import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(
        filter: {
          slug: { current: { ne: null } }
          publishedAt: { local: { ne: null } }
          title: { ne: null }
        }
        sort: { order: DESC, fields: publishedAt___local }
        limit: 4
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            publishedAt {
              local
              date: local(formatString: "MMMM Do, YYYY")
            }
            mainImage {
              asset {
                fluid(maxWidth: 305) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            summary
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
          }
        }
      }
    }
  `)
  const blogPosts = data.allSanityPost.edges
  if (blogPosts.length >= 1) {
    return (
      <ul>
        {blogPosts.map((post) => (
          <li key={post.node.id}>
            <h3>
              <Link to={`/blog/${post.node.slug.current}`}>{post.node.title}</Link>
            </h3>

            {post.node.mainImage && post.node.mainImage.asset && (
              <div style={{maxWidth: '300px', width: '100%'}}>
                <Img
                  loading='eager'
                  fluid={post.node.mainImage.asset.fluid}
                  alt={post.node.mainImage.alt}
                />
              </div>
            )}

            <p>{post.node.publishedAt.date}</p>

            <p>{post.node.summary}</p>
          </li>
        ))}
      </ul>
    )
  } else {
    return <p>No blog posts.</p>
  }
}

export default Page
