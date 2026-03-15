export interface Gateway {
    id: number
    name: string
    is_active: boolean
    priority: number
    created_at?: Date
  }
  
  export interface UpdateGatewayDTO {
    is_active?: boolean
    priority?: number
  }