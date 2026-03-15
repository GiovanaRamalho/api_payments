import { Router } from "express"
import { GatewayController } from "../controllers/gatewayController"

const router = Router()
const controller = new GatewayController()

router.patch("/:id/toggle", controller.toggleActive.bind(controller))
router.patch("/:id/priority", controller.updatePriority.bind(controller))

export default router