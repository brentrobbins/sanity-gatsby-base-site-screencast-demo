export default {
  name: 'logo',
  title: 'Logo',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Logo Text',
      description: 'This is text shown next to the logo.',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'url',
      validation: Rule => [
        Rule.required().uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})
      ],
      description: 'You can use absolute URLs (https://sanity.io), relative (/contact), tel (tel:970-867-5309) and mailto (mailto:johndoe@gmail.com) links.'
    },
    {
      name: 'logoImage',
      title: 'Image',
      type: 'image',
      description: 'The image should be an SVG file.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
      media: 'logoImage'
    }
  }
}
