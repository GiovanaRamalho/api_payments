export interface Product {
    id: number
    name: string
    amount: number
    created_at?: Date
  }
  
  export interface CreateProductDTO {
    name: string
    amount: number
  }