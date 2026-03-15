import { Request, Response } from "express"
import { PaymentService } from "../services/paymentService"

export class PurchaseController {

  private service = new PaymentService()

  async create(req: Request, res: Response) {

    const purchaseData = req.body

    const result = await this.service.processPayment(purchaseData)

    if (!result.success) {
      return res.status(400).json({
        message: "Payment failed"
      })
    }

    return res.json({
      message: "Payment successful",
      transactionId: result.transactionId
    })

  }

}