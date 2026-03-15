import { db } from "../config/database"
import { Client, CreateClientDTO } from "../models/client"

export class ClientRepository {

  async findAll(): Promise<Client[]> {

    const [rows] = await db.query(
      `SELECT * FROM clients`
    )

    return rows as Client[]

  }

  async findById(id: number): Promise<Client | null> {

    const [rows] = await db.query(
      `SELECT * FROM clients WHERE id = ?`,
      [id]
    )

    const clients = rows as Client[]

    return clients.length ? clients[0] : null

  }

  async findByEmail(email: string): Promise<Client | null> {

    const [rows] = await db.query(
      `SELECT * FROM clients WHERE email = ?`,
      [email]
    )

    const clients = rows as Client[]

    return clients.length ? clients[0] : null

  }

  async create(data: CreateClientDTO) {

    const [result]: any = await db.query(
      `INSERT INTO clients (name, email) VALUES (?, ?)`,
      [data.name, data.email]
    )

    return result.insertId

  }

  async getTransactions(clientId: number) {

    const [rows] = await db.query(
      `SELECT * 
       FROM transactions
       WHERE client_id = ?`,
      [clientId]
    )

    return rows

  }

}