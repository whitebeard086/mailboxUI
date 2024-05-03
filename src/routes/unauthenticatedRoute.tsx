import { useAppSelector } from '@/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const UnauthenticatedRoute = () => {
    const location = useLocation();
    const token = useAppSelector(state => state.auth.session.token)
    
    return !token ? (
        <Outlet />
    ) : (
        <Navigate to='/' state={{ from: location }} />
    )
}
export default UnauthenticatedRoute