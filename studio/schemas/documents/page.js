// import {RiPagesLine as Icon} from 'react-icons/ri'
import React from 'react'
const Icon = () => <span style={{fontSize: '1.5rem'}}>{'📝'}</span>

export default {
  name: 'page',
  title: 'Super Page',
  type: 'document',
  icon: Icon,
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This is used to setup the page URL and should not be changed after it is initiall setup or it might break links.',
      options: {
        source: 'title',
        maxLength: 96
      },
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    },
    prepare (selection) {
      const {title, subtitle} = selection
      return {
        title: `${title}`,
        subtitle: `/${subtitle}`
      }
    }
  }
}
