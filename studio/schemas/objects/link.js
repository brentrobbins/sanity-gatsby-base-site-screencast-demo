export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'link',
      type: 'url',
      validation: Rule => Rule.uri({'allowRelative': true, scheme: ['https', 'http']}).required(),
      title: 'Link URL'
    },
    {
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Business Website', value: 'business'},
          {title: 'Menu', value: 'menu'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'}
        ]
      }
    }
  ],
  preview: {
    select: {
      linkType: 'linkType',
      link: 'link'
    },
    prepare (selection) {
      const {link, linkType} = selection
      return {
        title: linkType,
        subtitle: link
      }
    }
  }
}
