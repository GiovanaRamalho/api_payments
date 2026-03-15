import { db } from "../config/database"
import { User, CreateUserDTO } from "../models/user"

export class UserRepository {

  async findAll(): Promise<User[]> {

    const [rows] = await db.query(
      "SELECT id, email, role FROM users"
    )

    return rows as User[]

  }

  async findById(id: number): Promise<User | null> {

    const [rows] = await db.query(
      "SELECT id, email, role FROM users WHERE id = ?",
      [id]
    )

    const users = rows as User[]

    return users.length ? users[0] : null

  }

  async findByEmail(email: string): Promise<User | null> {

    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    )

    const users = rows as User[]

    return users.length ? users[0] : null

  }

  async create(data: CreateUserDTO) {

    await db.query(
      "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
      [data.email, data.password, data.role]
    )

  }

  async update(id: number, data: Partial<User>) {

    await db.query(
      `UPDATE users 
       SET email = ?, role = ?
       WHERE id = ?`,
      [data.email, data.role, id]
    )

  }

  async delete(id: number) {

    await db.query(
      "DELETE FROM users WHERE id = ?",
      [id]
    )

  }

}