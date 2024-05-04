import { User } from './models'

export type LoginCredentials = {
    email: string
    password: string
}

export type LoginResponse = {
    token: string
    user: User
}