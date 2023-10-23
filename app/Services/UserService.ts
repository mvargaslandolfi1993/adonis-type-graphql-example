import User from 'App/Models/User'
import { Service } from 'typedi'
import { GraphQLError } from 'graphql'
import CreateUserDto from 'App/DTOs/Users/CreateUserDto'

@Service()
export default class UserService {
  public async get(page: number, limit: number) {
    return await User.query().paginate(page, limit)
  }

  public async find(id: string): Promise<any> {
    const user = await User.find(id)

    if (!user) {
      throw new GraphQLError('User not found')
    }

    return user
  }

  public async store(params: CreateUserDto): Promise<any> {
    const user = await User.create(params)

    return user
  }
}
