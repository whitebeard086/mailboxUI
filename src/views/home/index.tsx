import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='min-h-[80svh] grid place-content-center'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <img className='w-52' src="welcome.svg" alt="Welcome" />
                <h2 className='text-lg'>
                    Welcome, <span className='font-bold'>John Doe</span>
                </h2>
                <p className='text-lg text-center'>
                    You have 20 unread messages out of 100
                </p>
                <Link to='/inbox'>
                    <Button variant='primary'>
                        Go to Inbox
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default Home