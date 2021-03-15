import React from 'react'
const Icon = () => <span style={{fontSize: "1.5rem"}}>{"🏷"}</span>
//import {MdLocalOffer as Icon} from 'react-icons/ai'

export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: Icon,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
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
    },
    prepare (selection) {
      const {title, subtitle} = selection
      return {
        title: `${title}`,
        subtitle: `/blog/tag/${subtitle}`,
      }
    }
  }
}
