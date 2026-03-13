import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT)
})

export async function connectDatabase() {
    try {
      const connection = await db.getConnection()
      console.log("✅ Banco de dados conectado")
      connection.release()
    } catch (error) {
      console.error("❌ Erro ao conectar no banco:", error)
    }
  }