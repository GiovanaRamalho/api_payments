import { Request, Response } from "express"
import { GatewayRepository } from "../repositories/gatewayRepository"

export class GatewayController {

  private repository = new GatewayRepository()

  async toggleActive(req: Request, res: Response) {

    const { id } = req.params

    await this.repository.toggleActive(Number(id))

    return res.json({
      message: "Gateway status updated"
    })

  }

  async updatePriority(req: Request, res: Response) {

    const { id } = req.params
    const { priority } = req.body

    await this.repository.updatePriority(Number(id), priority)

    return res.json({
      message: "Gateway priority updated"
    })

  }

}