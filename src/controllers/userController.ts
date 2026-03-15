import { Request, Response } from "express"
import { UserRepository } from "../repositories/userRepository"

export class UserController {

  private repository = new UserRepository()

  async index(req: Request, res: Response) {

    const users = await this.repository.findAll()

    return res.json(users)

  }

  async create(req: Request, res: Response) {

    const user = req.body

    await this.repository.create(user)

    return res.status(201).json({
      message: "User created"
    })

  }

  async show(req: Request, res: Response) {

    const { id } = req.params

    const user = await this.repository.findById(Number(id))

    return res.json(user)

  }

  async update(req: Request, res: Response) {

    const { id } = req.params
    const data = req.body

    await this.repository.update(Number(id), data)

    return res.json({
      message: "User updated"
    })

  }

  async delete(req: Request, res: Response) {

    const { id } = req.params

    await this.repository.delete(Number(id))

    return res.json({
      message: "User deleted"
    })

  }

}