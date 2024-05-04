import { Outlet } from 'react-router-dom'
import Header from './header'
import { useGetAuthenticatedUser } from '@/services/hooks'
import { useEffect } from 'react'
import { setUser, useAppDispatch } from '@/store'

const Layout = () => {
    const { data, status } = useGetAuthenticatedUser()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === 'success') {
            dispatch(setUser(data.user))
        }
    }, [data?.user, dispatch, status])

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