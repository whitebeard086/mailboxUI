import { LoginCredentials, LoginResponse } from '@/types/auth';
import { apiLoginUser, apiLogoutUser } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';
import { setToken, setUser, useAppDispatch } from '@/store';

export const useLoginUser = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationKey: ['loginUser'],
        mutationFn: async (data: LoginCredentials) => {
            const response = await apiLoginUser<
                LoginResponse,
                LoginCredentials
            >(data);
            return response.data;
        },
        onSuccess: (data) => {
            dispatch(setToken(data.token));
            dispatch(setUser(data.user));
        },
        onError: () => {
            dispatch(setToken(''));
            dispatch(setUser({}));
        },
    });
};

export const useLogoutUser = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationKey: ['logoutUser'],
        mutationFn: async () => {
            const response = await apiLogoutUser();
            return response.data;
        },
        onSuccess: () => {
            dispatch(setToken(''));
            dispatch(setUser({}));
            window.location.reload();
        },
        onError: () => {
            dispatch(setToken(''))
            dispatch(setUser({}));
            window.location.reload();
        },
    });
};
