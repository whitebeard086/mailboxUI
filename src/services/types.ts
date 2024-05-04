import { Message, User } from '@/types/models'

type Link = {
    active?: boolean
    label?: string
    url?: string
}

export type GetMessagesRequest = {
    fetch?: boolean
    page?: number
}

export type GetMessageRequest = {
    id: number
}

export type MessagesResponse = {
    data: Message[]
    links: {
        first?: string
        last?: string
        next?: string
        prev?: string
    }
    meta: {
        current_page?: number
        from?: number
        last_page?: number
        links?: Link[]
        path?: string
        per_page?: number
        to?: number
        total?: number
    }
}

export type MessageResponse = {
    data: Message
}
export type UserResponse = {
    user: User
}