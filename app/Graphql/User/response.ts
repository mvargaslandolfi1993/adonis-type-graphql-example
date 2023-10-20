import { Field, ObjectType } from 'type-graphql'
import { UserType } from './type'

@ObjectType({ description: 'Object representing users' })
export class PaginatedResponseClass {
  @Field((_type) => [UserType])
  data: UserType[]

  @Field((_type) => JSON)
  meta: []
}
