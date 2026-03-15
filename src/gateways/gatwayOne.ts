import axios from "axios"
import { PaymentGateway, PaymentData, PaymentResult } from "./gatewayInterface"

export class GatewayOne implements PaymentGateway {

  async processPayment(data: PaymentData): Promise<PaymentResult> {

    try {

      const response = await axios.post(
        `${process.env.GATEWAY1_URL}/transactions`,
        data
      )

      return {
        success: true,
        transactionId: response.data.id
      }

    } catch (error) {

      return {
        success: false,
        error: "GatewayOne payment failed"
      }

    }

  }

  async refund(transactionId: string): Promise<boolean> {

    try {

      await axios.post(
        `${process.env.GATEWAY1_URL}/transactions/${transactionId}/charge_back`
      )

      return true

    } catch {

      return false

    }

  }

}