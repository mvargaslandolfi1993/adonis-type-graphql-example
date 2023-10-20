import { join } from 'path'
import { GraphQLConfig } from '@ioc:Adonis/Addons/GraphqlManager'

/*
  |--------------------------------------------------------------------------
  | GraphQL Config
  |--------------------------------------------------------------------------
  |
  | You can overrided the default config resolver path
  |
*/

export default {
  resolvers: join(__dirname, '../app/Graphql'),
} as GraphQLConfig
