import { UserRepository } from "../repositories/userRepository"
import bcrypt from "bcrypt"
import { User } from "../models/user"

export class UserService {

  private repository = new UserRepository()

  async listUsers() {
    return this.repository.findAll()
  }

  async createUser(user: User) {

    const hashedPassword = await bcrypt.hash(user.password, 10)

    return this.repository.create({
      ...user,
      password: hashedPassword
    })

  }

  async updateUser(id: number, data: Partial<User>) {
    return this.repository.update(id, data)
  }

  async deleteUser(id: number) {
    return this.repository.delete(id)
  }

}