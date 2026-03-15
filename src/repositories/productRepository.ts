import { db } from "../config/database"
import { Product, CreateProductDTO } from "../models/product"

export class ProductRepository {

  async findAll(): Promise<Product[]> {
    const [rows] = await db.query("SELECT * FROM products")
    return rows as Product[]
  }

  async findById(id: number): Promise<Product | null> {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE id = ?",
      [id]
    )

    const products = rows as Product[]

    return products.length ? products[0] : null
  }

  async create(data: CreateProductDTO): Promise<void> {
    await db.query(
      "INSERT INTO products (name, amount) VALUES (?, ?)",
      [data.name, data.amount]
    )
  }

}