import { Request, Response } from "express"
import { ProductService } from "../services/productService"

export class ProductController {

  private service = new ProductService()

  async index(req: Request, res: Response) {

    const products = await this.service.listProducts()

    return res.json(products)

  }

  async create(req: Request, res: Response) {

    const product = req.body

    await this.service.createProduct(product)

    return res.status(201).json({
      message: "Product created"
    })

  }

  async update(req: Request, res: Response) {

    const { id } = req.params
    const data = req.body

    await this.service.updateProduct(Number(id), data)

    return res.json({
      message: "Product updated"
    })

  }

  async delete(req: Request, res: Response) {

    const { id } = req.params

    await this.service.deleteProduct(Number(id))

    return res.json({
      message: "Product deleted"
    })

  }

}