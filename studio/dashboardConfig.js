export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5eee239d7588de275c84b4f3',
                  title: 'Sanity Studio',
                  name: 'Next-js-Landing-Pages-studio',
                  apiId: 'ff5ad877-9328-4756-a335-f8aad3ae20fd'
                },
                {
                  buildHookId: '5eee239d028bdd53b293e5a2',
                  title: 'Landing pages Website',
                  name: 'Next-js-Landing-Pages',
                  apiId: '183d5fdd-80fc-4f6f-962a-c0e74ba2ce66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blgilman81/Next-js-Landing-Pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Next-js-Landing-Pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
