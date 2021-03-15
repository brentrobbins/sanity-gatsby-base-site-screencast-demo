export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Keep your title under 60 characters long.',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description:
        'Keep your description between 50–300 characters long. The optimal is 160 characters.',
      validation: Rule => Rule.required()
    },
    {
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Facebook recommends 1200x630 and the minimum size is 600x315.',
      options: {
        hotspot: true
      }
    }
  ]
}
