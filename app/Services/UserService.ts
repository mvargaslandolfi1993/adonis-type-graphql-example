import User from 'App/Models/User'
import { Service } from "typedi";

@Service()
export default class UserService {
  public async get(page: number, limit: number) {
    return await User.query().paginate(page, limit)
  }

  public async find(id: string) {
    return await User.find(id)
  }
}
