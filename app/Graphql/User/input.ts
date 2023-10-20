import { UserType } from './type'
import { InputType, Field } from 'type-graphql'

@InputType()
export class UserInput implements Partial<UserType> {
  @Field()
  id: string
}
