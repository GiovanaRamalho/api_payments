import { db } from "../config/database"
import { Gateway } from "../models/gateway"

export class GatewayRepository {

  async findActiveGateways(): Promise<Gateway[]> {

    const [rows] = await db.query(
      `SELECT * 
       FROM gateways
       WHERE is_active = true
       ORDER BY priority ASC`
    )

    return rows as Gateway[]

  }

  async findAll(): Promise<Gateway[]> {

    const [rows] = await db.query(
      `SELECT * FROM gateways ORDER BY priority ASC`
    )

    return rows as Gateway[]

  }

  async toggleActive(id: number) {

    await db.query(
      `UPDATE gateways
       SET is_active = NOT is_active
       WHERE id = ?`,
      [id]
    )

  }

  async updatePriority(id: number, priority: number) {

    await db.query(
      `UPDATE gateways
       SET priority = ?
       WHERE id = ?`,
      [priority, id]
    )

  }

}