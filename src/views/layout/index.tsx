import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {
    return (
        <div className='w-full'>
            <Header />
            <main className='py-6 px-6'>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout