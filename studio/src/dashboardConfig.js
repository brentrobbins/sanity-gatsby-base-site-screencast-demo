export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604f4f9b64e222b1128efe36',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-base-site-screencast-demo-studio',
                  apiId: '4a1d8367-6613-4e4f-8dc4-8795be819271'
                },
                {
                  buildHookId: '604f4f9ba9112ec9224fa1c6',
                  title: 'Frontend Website',
                  name: 'sanity-gatsby-base-site-screencast-demo',
                  apiId: 'fe708f97-dc22-4d9c-8b04-4f67f6642487'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brentrobbins/sanity-gatsby-base-site-screencast-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-base-site-screencast-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
