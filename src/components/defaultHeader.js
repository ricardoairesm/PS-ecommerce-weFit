import styled from 'styled-components'
import logo from '../Assets/imagens/LogoCarrinho.png'
import { useContext } from 'react'
import Context from '../Pages/Context'
import { useNavigate } from 'react-router-dom'
import { screenIsntWideEnough } from '../utils'

export default function DefaultHeader() {
    const [selectedMoviesId, setSelectedMoviesId] = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <span onClick={
                    (e) => {
                        e.stopPropagation();
                        navigate('/')
                    }}  >We Movies</span>
                <FlexDiv onClick={
                    (e) => {
                        e.stopPropagation();
                        navigate('/carrinho')
                    }}  >
                    {screenIsntWideEnough() ?
                        <>
                            <MeuCarrinho id='parent'>
                                <h2>{selectedMoviesId ? (selectedMoviesId.length != 1 ? selectedMoviesId.length + ' itens' : '1 item') : '0 itens'}</h2>
                            </MeuCarrinho>
                            <img alt='no image' src={logo}></img>
                        </> :
                        <>
                            <MeuCarrinho id='parent'>
                                <h1 id='situational'>Meu Carrinho</h1>
                                <h2>{selectedMoviesId ? (selectedMoviesId.length != 1 ? selectedMoviesId.length + ' itens' : '1 item') : '0 itens'}</h2>
                            </MeuCarrinho>
                            <img alt='no image' src={logo}></img>
                        </>
                    }
                </FlexDiv>
            </Header >
        </>
    )
};

const Header = styled.div`
    display: flex;
    width: 960px;
    padding: 18px 10px;
    padding-bottom:42px;
    justify-content: space-between;
    align-items: center;
    span{
        color: #FFF;
        font-size: 20px;
        font-family: Open Sans;
        font-weight: 700;
    }
    span:hover{
        cursor: pointer;
    }
    @media (max-width:1000px) {
        width:345px;
        padding:0px;
        padding-bottom:18px;
    }
`

const MeuCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        all:unset;
        color: #FFF;
        font-size: 14px;
        font-family: Open Sans;
        font-weight: 600; 
    }
    h2{
        all:unset;
        color: #999;
        font-size: 12px;
        font-family: Open Sans;
        font-weight: 600; 
    } 
`

const FlexDiv = styled.div`
    all:unset;
    display:flex;
    align-items:center;
    img{
        margin-left:8px;
        @media (max-width:1000px) {
    }
    }
    &:hover{
        cursor: pointer;
    }
`
