/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import GraphQL from '@ioc:Adonis/Addons/GraphqlManager'

Route.get('/', async () => {
  return { app: 'Adonis Graphql Example' }
})

Route.post('/graphql', (ctx) => {
  return GraphQL.handle(ctx)
})

Route.get('/graphql', async ({ request, view }) => {
  view.share({ baseUrl: request.completeUrl() })
  return view.render('graphql_view')
})

Route.post('/graphql-controller', 'GraphqlsController.index')
