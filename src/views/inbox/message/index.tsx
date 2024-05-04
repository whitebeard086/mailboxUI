import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useGetMessage, useGetMessages } from '@/services/hooks'
import { setMessageData, setMessages, useAppDispatch } from '@/store'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Message = () => {
    const [fetchMessages, setFetchMessages] = useState(false)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const queryClient = useQueryClient()
    const id = Number(location.pathname.split('/').pop())

    const { data, status } = useGetMessage({ id })
    const { data: updatedMessages, status: updatedMessagesStatus } = useGetMessages({
        fetch: fetchMessages,
        page: 1,
    });

    const message = data?.data 

    // Get fresh user data to update read messages
    useEffect(() => {
        if (status === 'success') {
            queryClient.invalidateQueries({ queryKey: ['authenticatedUser'] })
            setFetchMessages(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status])

    // Get fresh messages data to reflect that the selected message has been read
    useEffect(() => {
        if (updatedMessagesStatus === 'success') {
            dispatch(setMessageData(updatedMessages));
            dispatch(setMessages(updatedMessages.data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedMessages, updatedMessagesStatus]);

    return (
        <div className='max-w-5xl mx-auto px-8'>
            <h2 className="text-xl font-bold">
                {message?.subject}
            </h2>

            <div className="mt-6">
                <div className='flex items-center gap-2'>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="font-bold">
                            {message?.sender.name}
                        </h4>
                        <p>
                            {message?.sender.email}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="mt-6">
                <p>
                    {message?.content}
                </p>
            </div>

        </div>
    )
}
export default Message