import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { v4 as uuid } from 'uuid'

export default class Comment extends BaseModel {
  public static selfAssignPrimaryKey = true

  @beforeCreate()
  public static async assignUuid(comment: Comment) {
    comment.id = uuid()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public message: string

  @column()
  public user_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>
}
