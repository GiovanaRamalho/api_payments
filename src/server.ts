import app from "./app"
import { connectDatabase } from "./config/database"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000;

async function startServer() {

  await connectDatabase()

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
  })

}

startServer()