import { Router } from "express"
import { ProductController } from "../controllers/productController"

const router = Router()
const controller = new ProductController()

router.get("/", controller.index.bind(controller))
router.post("/", controller.create.bind(controller))
router.put("/:id", controller.update.bind(controller))
router.delete("/:id", controller.delete.bind(controller))

export default router