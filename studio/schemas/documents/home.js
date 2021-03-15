import React from 'react'
const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🏠'}</span>

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: Icon,
  liveEdit: false,
  // __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'bodyPortableText'
    },
    {
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo',
      validation: Rule => Rule.required(),
      options: {collapsible: true, collapsed: true}
    }
  ]
}
