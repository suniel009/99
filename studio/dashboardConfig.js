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
                  buildHookId: '5f71841a3961d35cf7a2c2cd',
                  title: 'Sanity Studio',
                  name: '99-studio',
                  apiId: 'bd6d42c4-958a-4308-9c68-2b52f2892b8c'
                },
                {
                  buildHookId: '5f71841a0bbae862fe231df1',
                  title: 'Blog Website',
                  name: '99-web',
                  apiId: '3a1145e8-d594-4e79-b9b4-840164f06d77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/99',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://99-web.netlify.app', category: 'apps'}
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
