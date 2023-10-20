import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import CommentFactory from './CommentFactory'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  }
})
  .relation('comments', () => CommentFactory)
  .build()
