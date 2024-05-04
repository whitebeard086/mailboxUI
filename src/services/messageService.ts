import ApiService from './apiService';

export async function apiGetMessages<T, U extends Record<string, unknown>>(data: U) {
    const page = data.page
    
    return ApiService.fetchData<T>({
        url: `/messages${page ? `?page=${page}` : ''}`,
        method: 'get',
        data,
    })
}