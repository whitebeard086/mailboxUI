import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
    setMessage,
    setMessageData,
    setMessages,
    useAppDispatch,
    useAppSelector,
} from '@/store';
import { useGetMessages } from '../../services/hooks';
import { useNavigate } from 'react-router-dom';
import { Message } from '@/types/models';

dayjs.extend(advancedFormat);

const Inbox = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [paginate, setPaginate] = useState<boolean>(false);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { user } = useAppSelector((state) => state.auth.profile);
    const { messages, messageData } = useAppSelector((state) => state.app.common);

    const { data, status } = useGetMessages({
        fetch: paginate,
        page: pageNumber,
    });
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: lastMessageRef.current,
        threshold: 1,
    });

    const isLastPage = messageData.links?.next === null;
    const lastMessage = messages[messages.length - 1];

    const onLoadMore = useCallback(() => {
        setPaginate(true);
        setPageNumber(pageNumber + 1);
    }, [pageNumber]);

    const onViewMessage = (message: Message) => {
        dispatch(setMessage(message));
        navigate(`/inbox/${message.id}`);
    };

    useEffect(() => {
        if (!messages.length) {
            setPaginate(true);
        }

        return () => {
            setPaginate(false);
        };
    }, [messages.length, paginate]);

    useEffect(() => {
        if (status === 'success') {
            const existingMessages = messages.map((message) => message.id);
            const newMessages =
                data?.data?.filter(
                    (message) => !existingMessages.includes(message.id)
                ) ?? [];

            dispatch(setMessageData(data));
            dispatch(setMessages([...messages, ...newMessages]));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, status]);

    useEffect(() => {
        if (!isLastPage && entry?.isIntersecting) {
            onLoadMore();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entry?.isIntersecting, isLastPage]);

    return (
        <div className='max-w-5xl mx-auto lg:px-6'>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-bold'>Messages</h2>
                    <p className='font-semibold text-gray-500'>
                        {user?.messagesCount} Messages |{' '}
                        {user?.unreadMessagesCount} Unread
                    </p>
                </div>
                <Button size='sm' variant='primary'>
                    Mark all As Read
                </Button>
            </div>

            <div className='max-h-[70svh] overflow-auto'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sender</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead className='text-right'>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages?.map((message) => (
                            <TableRow
                                ref={
                                    message.id === lastMessage?.id ? ref : null
                                }
                                key={message.id}
                                onClick={() => onViewMessage(message)}
                                className={cn(
                                    'hover:cursor-pointer',
                                    !message.isRead && 'font-bold'
                                )}
                            >
                                <TableCell className='relative'>
                                    {message.sender.name}
                                    {!message.isRead && (
                                        <span
                                            className={cn(
                                                'absolute top-3 h-2 w-2 rounded-full bg-red-500'
                                            )}
                                        />
                                    )}
                                </TableCell>
                                <TableCell>{message.preview}</TableCell>
                                <TableCell className='text-right'>
                                    {dayjs(message.createdAt).format(
                                        'Do MMM, YYYY'
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className='flex justify-center mt-4'>
                    {isLastPage ? (
                        <p className='text-gray-500 text-center'>
                            No more messages
                        </p>
                    ) : status === 'pending' ? (
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    ) : (
                        <Button onClick={onLoadMore}>Load More</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Inbox;
