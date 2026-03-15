export type UserRole =
  | "ADMIN"
  | "MANAGER"
  | "FINANCE"
  | "USER"

export interface User {
  id: number
  email: string
  password: string
  role: UserRole
  created_at?: Date
}

export interface CreateUserDTO {
  email: string
  password: string
  role: UserRole
}