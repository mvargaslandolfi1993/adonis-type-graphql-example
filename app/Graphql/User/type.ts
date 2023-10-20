import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'Object representing users' })
export class UserType {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  last_name: string

  @Field()
  phone: string

  @Field()
  email: string
}
