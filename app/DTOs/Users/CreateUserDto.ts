import { validator, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateUserDto {
  readonly name: string
  readonly last_name: string
  readonly email: string
  readonly phone?: string | null

  private constructor(name: string, last_name: string, email: string, phone?: string | null) {
    this.name = name
    this.last_name = last_name
    this.email = email
    this.phone = phone
  }

  public static async create(data: object) {
    const payload = await validator.validate({
      schema: this.rules(),
      data: data,
    })

    return new CreateUserDto(payload.name, payload.last_name, payload.email, payload.phone)
  }

  public static rules() {
    return schema.create({
      name: schema.string(),
      last_name: schema.string(),
      email: schema.string(),
      phone: schema.string.nullableAndOptional(),
    })
  }
}
