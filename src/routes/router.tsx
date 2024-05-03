import Home from '@/views/home';
import Inbox from '@/views/inbox';
import Layout from '@/views/layout';
import { createBrowserRouter } from 'react-router-dom';
import AuthenticatedRoute from './authenticatedRoute';
import UnauthenticatedRoute from './unauthenticatedRoute';
import Login from '@/views/auth/login';

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                element: <UnauthenticatedRoute />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                    },
                ],
            },
            {
                element: <AuthenticatedRoute />,
                children: [
                    {
                        element: <Layout />,
                        children: [
                            {
                                index: true,
                                element: <Home />,
                            },
                            {
                                path: 'inbox',
                                element: <Inbox />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
