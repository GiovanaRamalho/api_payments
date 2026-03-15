import { ClientRepository } from "../repositories/clientRepositories"

export class ClientService {

  private repository = new ClientRepository()

  async listClients() {
    return this.repository.findAll()
  }

  async getClientTransactions(clientId: number) {
    return this.repository.getTransactions(clientId)
  }

}