import { apiGetMessages } from '@/components/services/messageService'
import { useQuery } from '@tanstack/react-query'
import { GetMessagesRequest, MessagesResponse } from './types'
// import { useAppDispatch } from '@/store'

export const useGetMessages = (data: GetMessagesRequest) => {
    return useQuery({
        queryKey: ['getMessages'],
        queryFn: async () => {
            const response = await apiGetMessages<MessagesResponse, GetMessagesRequest>(data)
            return response.data
        },
        enabled: data.paginate
    })
}

// export const useGetMessages = () => {
//     const queryClient = useQueryClient()
//     const dispatch = useAppDispatch()

//     return useMutation({
//         mutationKey: ['getMessages'],
//         mutationFn: async (data: LoginCredentials) => {
//             const response = await apiLoginUser<LoginResponse, LoginCredentials>(data)
//             return response.data
//         },
//     })
// }