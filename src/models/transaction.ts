export type TransactionStatus =
  | "success"
  | "failed"

export interface Transaction {
  id: number
  client_id: number
  gateway_id: number
  external_id: string
  status: TransactionStatus
  amount: number
  card_last_numbers: string
  created_at?: Date
}

export interface CreateTransactionDTO {
  client_id: number
  gateway_id: number
  external_id: string
  status: TransactionStatus
  amount: number
  card_last_numbers: string
}