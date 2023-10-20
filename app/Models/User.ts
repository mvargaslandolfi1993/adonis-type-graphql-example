import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeCreate, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Comment from './Comment'

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true

  @beforeCreate()
  public static async assignUuid(user: User) {
    user.id = uuid()
  }

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public last_name: string

  @column()
  public phone: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Comment, { foreignKey: 'user_id' })
  public comments: HasMany<typeof Comment>
}
