import { type MiddlewareInterface, type NextFn, type ResolverData } from 'type-graphql'
import { Service } from 'typedi'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export interface Context {
  ctx: HttpContextContract
}

@Service()
export class CustomMiddleware implements MiddlewareInterface<Context> {
  /**
   * You can access to Adonis Context
   * @param param0
   * @param next
   * @returns
   */
  async use(_context: ResolverData<Context>, next: NextFn) {
    /*
     * Do whever you want
     * _context.context.ctx.request.body()
     * also you can destructure like
     * {context, info}: ResolverData<Context>
     */
    return next()
  }
}
