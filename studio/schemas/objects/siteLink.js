import {MdLink} from 'react-icons/md'

export default {
  name: 'siteLink',
  title: 'Links',
  type: 'object',
  icon: MdLink,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'siteLink',
      type: 'url',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}),
      title: 'Link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      siteLink: 'siteLink'
    },
    prepare (selection) {
      const {title, siteLink} = selection
      return {
        title: title,
        subtitle: `Link: ${siteLink || 'No Link'}`
      }
    }
  }
}
