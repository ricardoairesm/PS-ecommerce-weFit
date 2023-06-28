import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../Pages/Context'
import MovieCard from './movieCard'

export default function MovieCards() {
    const [selectedMoviesId, setSelectedMoviesId, movieList] = useContext(Context);
    return (
        <CardList>
            {
                movieList && movieList.map((movie, index) => (
                    <MovieCard key = {index} movie={movie} index={index} />
                ))}
        </CardList>
    )
}

const CardList = styled.div`
    display: flex;
    width: 980px;
    box-sizing:border-box;
    flex-wrap:wrap;
    @media (max-width:1000px) {
        width:355px;
        flex-direction:column;
    }
`
