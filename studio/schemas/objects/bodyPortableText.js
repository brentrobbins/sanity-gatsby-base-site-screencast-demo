import {MdFileDownload as Icon} from 'react-icons/md'

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Page body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',

            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',

                validation: Rule => [
                  Rule.required().uri({allowRelative: true, scheme: ['https', 'http', 'mailto', 'tel']})
                ],
                description: 'You can use https/http, relative (start with a foward slash), tel and mailto links'
              },
              {
                title: 'New tab',
                name: 'blank',
                description: 'This will open up the link in a new tab.',
                type: 'boolean'
              }
            ]
          },

          {
            name: 'fileDownload',
            type: 'object',
            title: 'File Download',
            blockEditor: {
              icon: Icon
            },
            fields: [
              {
                title: 'File',
                name: 'file',
                type: 'file'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    {
      type: 'mainImage',
      options: {hotspot: false}
    },
    {
      type: 'youtube'
    },
    {
      type: 'pdfFile'
    },
    {
      type: 'iframe'
    }
  ]
}
