import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const PostTeaser = ({id, title, slug, date, category, tags, summary, image}) => {
  return (
    <>
      <article key={id}>
        <h3>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>

        {date && <p>{date}</p>}
        {summary && <p>{summary}</p>}

        {image && (
          <div style={{maxWidth: '240px', width: '100%'}}>
            <Link to={`/blog/${slug}`}>
              <Img loading='eager' fluid={image.asset.fluid} alt={image.alt} />
            </Link>
          </div>
        )}

        {category && category.slug && category.slug.current && (
          <div>
            <p>Category: </p>
            <Link to={`/blog/category/${category.slug.current}`}>{category.title}</Link>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div>
            <p>Tags: </p>
            <ul>
              {tags.map((tag) => (
                <li key={tag.id}>
                  <Link to={`/blog/tag/${tag.slug.current}`}>{tag.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

      </article>
    </>
  )
}
export default PostTeaser
