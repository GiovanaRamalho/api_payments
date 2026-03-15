import axios from "axios"
import { PaymentGateway, PaymentData, PaymentResult } from "./gatewayInterface"

export class GatewayTwo implements PaymentGateway {

  async processPayment(data: PaymentData): Promise<PaymentResult> {

    try {

      const response = await axios.post(
        `${process.env.GATEWAY2_URL}/transacoes`,
        {
          valor: data.amount,
          nome: data.name,
          email: data.email,
          numeroCartao: data.cardNumber,
          cvv: data.cvv
        }
      )

      return {
        success: true,
        transactionId: response.data.id
      }

    } catch {

      return {
        success: false,
        error: "GatewayTwo payment failed"
      }

    }

  }

  async refund(transactionId: string): Promise<boolean> {

    try {

      await axios.post(
        `${process.env.GATEWAY2_URL}/transacoes/reembolso`,
        { id: transactionId }
      )

      return true

    } catch {

      return false

    }

  }

}