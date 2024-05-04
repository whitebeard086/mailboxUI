import { apiGetMessage, apiGetMessages } from '@/services/messageService';
import { useQuery } from '@tanstack/react-query';
import { GetMessageRequest, GetMessagesRequest, MessageResponse, MessagesResponse, UserResponse } from './types';
import { apiGetAuthenticatedUser } from './authService';

export const useGetMessages = (data: GetMessagesRequest) => {
    return useQuery({
        queryKey: ['getMessages'],
        queryFn: async () => {
            const response = await apiGetMessages<MessagesResponse, GetMessagesRequest>(data);
            return response.data;
        },
        enabled: data.fetch,
    });
};

export const useGetMessage = (data: GetMessageRequest) => {
    return useQuery({
        queryKey: ['getMessage', data.id],
        queryFn: async () => {
            const response = await apiGetMessage<MessageResponse, GetMessageRequest>(data);
            return response.data;
        },
    });
};

export const useGetAuthenticatedUser = () => {
    return useQuery({
        queryKey: ['authenticatedUser'],
        queryFn: async () => {
            const response = await apiGetAuthenticatedUser<UserResponse>();
            return response.data;
        },
        // enabled: getUser,
    });
}