import { Router } from "express"
import { PurchaseController } from "../controllers/purchaseController"

const router = Router()
const controller = new PurchaseController()

router.post("/", controller.create.bind(controller))

export default router