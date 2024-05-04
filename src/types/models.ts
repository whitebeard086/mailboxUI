export type User = {
    id: number
    name: string
    email: string
    messagesCount: number
    unreadMessagesCount: number
}

export type Message = {
    id: number
    subject: string
    content: string
    preview: string
    isRead: boolean
    sender: User
    createdAt: Date | null
    updatedAt: Date | null
}