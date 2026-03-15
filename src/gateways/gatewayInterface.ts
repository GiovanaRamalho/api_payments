export interface PaymentData {
    amount: number
    name: string
    email: string
    cardNumber: string
    cvv: string
  }
  
  export interface PaymentResult {
    success: boolean
    transactionId?: string
    error?: string
  }
  
  export interface PaymentGateway {
  
    processPayment(data: PaymentData): Promise<PaymentResult>
  
    refund(transactionId: string): Promise<boolean>
  
  }