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
                  buildHookId: '611d5a67b0fa9a00d6c9c174',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a1kprakm',
                  apiId: 'f9f67196-b47e-476d-bccd-6201d7dbe110'
                },
                {
                  buildHookId: '611d5a6720b4260092fd7d9c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vee3qhgu',
                  apiId: 'b79f4c8c-f20b-431c-b79c-4ca616cf3254'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlmontoya2/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vee3qhgu.netlify.app', category: 'apps'}
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
