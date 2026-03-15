import { Router } from "express"

import authRoutes from "./authRoutes"
import productRoutes from "./productRoutes"
import purchaseRoutes from "./purchaseRoutes"
import gatewayRoutes from "./gatewayRoutes"
import userRoutes from "./userRoutes"
import clientRoutes from "./clientRoutes"

const router = Router()

router.use("/auth", authRoutes)
router.use("/products", productRoutes)
router.use("/purchase", purchaseRoutes)
router.use("/gateways", gatewayRoutes)
router.use("/users", userRoutes)
router.use("/clients", clientRoutes)

export default router