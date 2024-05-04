import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGetMessages } from '../../services/hooks';
import {
    setMessageData,
    setMessages,
    useAppDispatch,
    useAppSelector,
} from '@/store';

const Home = () => {
    const dispatch = useAppDispatch();
    const { data, status } = useGetMessages({ fetch: true });
    const { user } = useAppSelector((state) => state.auth.profile);
    const { messages } = useAppSelector((state) => state.app.common);

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

    return (
        <div className='min-h-[80svh] grid place-content-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img className='w-52' src='welcome.svg' alt='Welcome' />
                <h2 className='text-lg'>
                    Welcome, <span className='font-bold'>{user?.name}</span>
                </h2>
                <p className='text-lg text-center'>
                    You have {user?.unreadMessagesCount ?? 0} unread messages
                    out of {user?.messagesCount ?? 0}
                </p>
                <Link to='/inbox'>
                    <Button variant='primary'>Go to Inbox</Button>
                </Link>
            </div>
        </div>
    );
};
export default Home;
