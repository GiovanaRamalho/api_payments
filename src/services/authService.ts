import { UserRepository } from "../repositories/userRepository"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class AuthService {

  private userRepository = new UserRepository()

  async login(email: string, password: string) {

    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error("Invalid credentials")
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Invalid credentials")
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    )

    return { token }
  }

}