import { MdEmail } from 'react-icons/md';
import { Loader2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useLogoutUser } from '../auth/utils/hooks';
import { useAppSelector } from '@/store';
import { Link } from 'react-router-dom';

const Header = () => {
    const { mutate, status } = useLogoutUser()
    const { user } = useAppSelector((state) => state.auth.profile)
    const handleLogout = () => {
        mutate()
    }

    return (
        <div className='h-20 border-b'>
            <div className='max-w-5xl mx-auto px-6 flex h-full items-center'>
                <div className='w-full flex items-center gap-4 justify-between'>
                    <Link to='/'>
                        <h2 className='text-2xl font-bold'>Logo</h2>
                    </Link>
                    <div className='flex items-center gap-6'>
                        <div className='relative'>
                            <MdEmail className='text-4xl' />
                            <div className='absolute top-0 h-3 w-fit left-5 p-2 flex items-center justify-center rounded-full bg-red-500'>
                                <span className='animate-ping h-3 w-full p-2 absolute top-0 left-0 inline-flex rounded-full bg-red-400 opacity-75'></span>
                                <span className='text-xs text-white z-20'>
                                    {user?.unreadMessagesCount ?? 0}
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h4 className='text-lg font-semibold'>{user?.name}</h4>
                            <Popover>
                                <PopoverTrigger
                                    asChild
                                    className='hover:cursor-pointer'
                                >
                                    <Avatar>
                                        <AvatarImage src='https://github.com/shadcn.png' />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='flex justify-center items-end h-28'>
                                    <Button
                                        size='sm'
                                        variant='destructive'
                                        disabled={status === 'pending'}
                                        onClick={handleLogout}
                                    >
                                        {status === 'pending' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Logout
                                    </Button>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
