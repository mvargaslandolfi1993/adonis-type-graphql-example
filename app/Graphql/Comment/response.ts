import { Field, ObjectType } from 'type-graphql'
import { CommentType } from './type'

@ObjectType({ description: 'Object representing ' })
export class PaginatedResponseClass {
  @Field((_type) => [CommentType])
  data: CommentType[]

  @Field((_type) => JSON)
  meta: []
}
