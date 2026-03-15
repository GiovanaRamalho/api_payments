import { Router } from "express"
import { UserController } from "../controllers/userController"

const router = Router()
const controller = new UserController()

router.get("/", controller.index.bind(controller))
router.post("/", controller.create.bind(controller))
router.get("/:id", controller.show.bind(controller))
router.put("/:id", controller.update.bind(controller))
router.delete("/:id", controller.delete.bind(controller))

export default router