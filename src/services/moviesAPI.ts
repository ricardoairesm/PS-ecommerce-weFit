import api from './api'

export async function getMovies() {
    const response = await api.get('/products')
    return response
}

