import React from 'react'
import clientConfig from '../../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from '../serializers/serializers'
import BlogView from '../serializers/viewComponents/BlogView'

const Page = ({content, slug}) => {
  return (
    <div>
      <BasePortableText blocks={content} serializers={serializers} {...clientConfig.sanity} />
      {slug === 'blog' && (
        <div>
          <BlogView />
        </div>
      )}
    </div>
  )
}
export default Page
