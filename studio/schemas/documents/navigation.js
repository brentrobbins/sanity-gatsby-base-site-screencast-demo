// import {MdMenu} from 'react-icons/md'
import React from 'react'
const Icon = () => <span style={{fontSize: '1.5rem'}}>{'🔗'}</span>

export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Icon,
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{
        type: 'siteLink'
      }]
    }
  ]
}
