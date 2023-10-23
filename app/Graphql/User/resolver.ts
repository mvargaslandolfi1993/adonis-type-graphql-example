import { Resolver, Query, Arg, UseMiddleware, Mutation } from 'type-graphql'
import { UserType } from './type'
import UserService from 'App/Services/UserService'
import { Service } from 'typedi'
import { CustomMiddleware } from '../Middlewares/CustomMiddleware'
import { UserInput } from './input'
import CreateUserDto from 'App/DTOs/Users/CreateUserDto'

@Service()
@Resolver((_of) => UserType)
export class UserResolver {
  constructor(
    // Dependency injection
    private readonly userService: UserService
  ) {}

  @Query((_returns) => UserType, { nullable: true, description: 'Get user by id' })
  async user(@Arg('id') id: string): Promise<UserType | null> {
    return await this.userService.find(id)
  }

  @Query((_returns) => [UserType], { description: 'Get all users' })
  @UseMiddleware(CustomMiddleware)
  async users(
    @Arg('page', { defaultValue: 1, nullable: true }) page: number,
    @Arg('limit', { defaultValue: 25, nullable: true }) limit: number
  ) {
    return await this.userService.get(page, limit)
  }

  @Mutation((_returns) => UserType)
  async addUser(@Arg('user') userInput: UserInput): Promise<UserType> {
    const dto = await CreateUserDto.create(userInput)

    return await this.userService.store(dto)
  }
}
