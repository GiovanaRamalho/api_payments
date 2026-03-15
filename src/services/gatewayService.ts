import { GatewayRepository } from "../repositories/gatewayRepository"

export class GatewayService {

  private repository = new GatewayRepository()

  async getActiveGateways() {
    return this.repository.findActiveGateways()
  }

  async toggleGateway(id: number) {
    return this.repository.toggleActive(id)
  }

  async updatePriority(id: number, priority: number) {
    return this.repository.updatePriority(id, priority)
  }

}