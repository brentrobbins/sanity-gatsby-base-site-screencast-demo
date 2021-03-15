import {MdImage} from 'react-icons/md'

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  icon: MdImage,
  options: {
    metadata: ['location']
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      options: {isHighlighted: true},
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required()
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
