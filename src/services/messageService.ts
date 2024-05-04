import ApiService from './apiService';

export async function apiGetMessages<T, U extends Record<string, unknown>>(data: U) {
    const page = data.page
    
    return ApiService.fetchData<T>({
        url: `/messages${page ? `?page=${page}` : ''}`,
        method: 'get',
        data,
    })
}

export async function apiGetMessage<T, U extends Record<string, unknown>>(data: U) {
    const id = data.id
    
    return ApiService.fetchData<T>({
        url: `/messages/${id}`,
        method: 'get',
        data,
    })
}