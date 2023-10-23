import { Resolver, Query, Arg } from 'type-graphql'
import { CommentType } from './type'
import Comment from 'App/Models/Comment'
import { Service } from 'typedi'

@Service()
@Resolver((_of) => CommentType)
export class CommentResolver {
  @Query((_returns) => CommentType, { nullable: true, description: 'Get comment by id' })
  async comment(@Arg('id') id: string): Promise<CommentType | null> {
    return await Comment.find(id)
  }

  @Query((_returns) => [CommentType], { description: 'Get all comments' })
  async comments(
    @Arg('page', { nullable: true, defaultValue: 1 }) page: number,
    @Arg('limit', { nullable: true, defaultValue: 25 }) limit: number
  ) {
    return await Comment.query().paginate(page, limit)
  }
}
