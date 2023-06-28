import * as moviesApi from '../services/moviesAPI'
import { useCallback, useState } from 'react'

export const useMovies = () => {
    const [movieList, setMovieList] = useState()
    const getAll = useCallback(async() => {
        const { data } = await moviesApi.getMovies()
        setMovieList(data)
    }, [])
    return {
        movieList,
        getAll,
    }
}
