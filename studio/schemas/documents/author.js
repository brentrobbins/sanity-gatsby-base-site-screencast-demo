// import {MdPerson as Icon} from 'react-icons/fa'
import React from 'react'
const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🙂'}</span>

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: Icon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'DO NOT change this or it will break your site.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Headshot'
    },
    {
      name: 'shortBio',
      type: 'text',
      title: 'Short Bio'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'bodyPortableText'
    },
    {
      title: 'SEO Settings',
      name: 'seoSettings',
      type: 'seo'
      // validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image'
    },
    prepare (selection) {
      const {title, subtitle, media} = selection
      return {
        title: `${title}`,
        subtitle: `/blog/author/${subtitle}`,
        media: media
      }
    }
  }
}
