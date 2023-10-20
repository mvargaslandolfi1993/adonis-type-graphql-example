import { CommentType } from './type'
import { InputType, Field } from 'type-graphql'

@InputType()
export class CommentInput implements Partial<CommentType> {
  @Field()
  id: string
}
