import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import clientConfig from '../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers/serializers'

const Page = ({title, content, date, category, tags, mainImage}) => {
  return (
    <article>

      <h1>{title}</h1>

      {date && (<p>{date}</p>)}

      {category && category.slug && category.slug.current && (<div><p>Category: </p><Link to={`/blog/category/${category.slug.current}`}>{category.title}</Link></div>)}

      {tags && tags.length > 0 && (<div>
        <p>Tags: </p>
        <ul>
          {tags.map(tag => (
            <li key={tag.id}><Link to={`/blog/tag/${tag.slug.current}`}>{tag.title}</Link></li>
          ))}
        </ul>
      </div>)}

      <p><Link to={`/blog/`}>← Back to the Blog</Link></p>

      {mainImage && (<div style={{maxWidth: '620px', width: '100%'}}>
        <Img loading='eager' fluid={mainImage.asset.fluid} alt={mainImage.alt} />
      </div>)}

      <div>
        <BasePortableText blocks={content} serializers={serializers} {...clientConfig.sanity} />
      </div>

    </article>
  )
}
export default Page
