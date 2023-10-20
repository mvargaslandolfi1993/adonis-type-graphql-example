import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Object representing Comment' })
export class CommentType {
  @Field()
  id: string

  @Field()
  message: string

  @Field()
  user_id: string
}
