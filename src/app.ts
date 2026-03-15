import express from "express"
import routes from "../src/routes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" })
})

app.use("/api", routes)

export default app