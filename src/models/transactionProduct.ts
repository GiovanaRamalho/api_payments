export interface TransactionProduct {
    transaction_id: number
    product_id: number
    quantity: number
  }
  
  export interface CreateTransactionProductDTO {
    transaction_id: number
    product_id: number
    quantity: number
  }