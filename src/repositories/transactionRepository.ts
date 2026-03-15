import { db } from "../config/database"
import { CreateTransactionDTO } from "../models/transaction"

export class TransactionRepository {

  async create(data: CreateTransactionDTO) {

    await db.query(
      `INSERT INTO transactions 
      (client_id, gateway_id, external_id, status, amount, card_last_numbers)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.client_id,
        data.gateway_id,
        data.external_id,
        data.status,
        data.amount,
        data.card_last_numbers
      ]
    )

  }

}