import { useAppSelector } from '@/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthenticatedRoute = () => {
    const location = useLocation();
    const token = useAppSelector(state => state.auth.session.token)
    
    return token ? (
        <Outlet />
    ) : (
        <Navigate to='/login' state={{ from: location }} />
    )
}
export default AuthenticatedRoute