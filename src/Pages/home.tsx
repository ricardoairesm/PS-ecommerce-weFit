import styled from 'styled-components'
import DefaultHeader from '../components/defaultHeader'
import MovieCards from '../components/movieCardList'

export default function Home() {
    return (
        <DefaultBackground>
            <DefaultHeader />
            <MovieCards />
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
