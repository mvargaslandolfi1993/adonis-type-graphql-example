import { UserType } from './type'
import { InputType, Field } from 'type-graphql'

@InputType()
export class UserInput implements Partial<UserType> {
  @Field()
  name: string

  @Field()
  last_name: string

  @Field({ nullable: true })
  phone: string

  @Field()
  email: string
}
