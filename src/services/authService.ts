import ApiService from './apiService';

export async function apiLoginUser<T, U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchData<T>({
        url: '/login',
        method: 'post',
        data,
    })
}

export async function apiLogoutUser() {
    return ApiService.fetchData({
        url: '/logout',
        method: 'post',
    })
}

export async function apiGetAuthenticatedUser<T>() {
    return ApiService.fetchData<T>({
        url: '/user',
        method: 'get',
    })
}