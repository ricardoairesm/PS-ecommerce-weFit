import styled from 'styled-components'
import DefaultHeader from '../components/defaultHeader'
import MovieCards from '../components/movieCardList'
import Oval from 'react-loader-spinner'
import { useContext } from 'react';
import Context from './Context';

export default function Home() {
    const [selectedMoviesId, setSelectedMoviesId, movieList] = useContext(Context);
    return (
        <DefaultBackground>
            <DefaultHeader />
            {movieList ? <MovieCards /> : <Center><Oval height={80} width={80} color="black" visible={true} secondaryColor="white" type={'Oval'} /></Center>}
        </DefaultBackground>
    )
}

const DefaultBackground = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100vw;
    height:100vh;
    box-sizing:border-box;
    background-color:#2F2E41;
    padding:0px 17% 0px 17%;
    @media (max-width:1000px) {
        height:100%;
        width:375px;
        padding:18px 10px;
    }
`

const Center = styled.div`
    display:flex;
    width:1000px;
    height:600px;
    align-items:center;
    justify-content:center;
`
