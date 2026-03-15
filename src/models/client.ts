export interface Client {
    id: number
    name: string
    email: string
    created_at?: Date
  }
  
  export interface CreateClientDTO {
    name: string
    email: string
  }