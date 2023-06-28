import styled from 'styled-components'
import background from '../Assets/imagens/Frame 7.png'
import smallBackground from '../Assets/imagens/smallBackground.png'
import DefaultHeader from '../components/defaultHeader'
import { useContext } from 'react';
import Context from './Context';
import { screenIsntWideEnough } from '../utils'
import { CartItems } from '../components/cartItems'
import { SmallCartItems } from '../components/smallCartItems';
import { useNavigate } from 'react-router-dom';
export default function Carrinho() {
    const [selectedMoviesId, setSelectedMoviesId, movieList] = useContext(Context);
    const navigate = useNavigate();
    if (!selectedMoviesId || !movieList || selectedMoviesId.length === 0) {
        return (
            <>
                <DefaultBackground>
                    <DefaultHeader />
                    <Center>
                        <img alt='no image' style={{ marginLeft: '6px' }} src={screenIsntWideEnough() ? smallBackground : background}></img>
                        {screenIsntWideEnough() ? <SmallButton onClick={(e) => {
                            e.stopPropagation();
                            navigate('/')
                        }}  >VOLTAR</SmallButton> : <Button onClick={(e) => {
                            e.stopPropagation();
                            navigate('/')
                        }}  >VOLTAR</Button>}
                    </Center>
                </DefaultBackground>
            </>
        )
    }
    else {
        return (
            <>
                <DefaultBackground>
                    <DefaultHeader />
                    {screenIsntWideEnough() ? <SmallCartItems /> : <CartItems />}
                </DefaultBackground>
            </>
        )
    }
};

const Center = styled.div`
position:relative;
`

const DefaultBackground = styled.div`
    width:100vw;
    height:100vh;
    box-sizing:border-box;
    background-color:#2F2E41;
    padding:0px 17% 0px 17%;
    @media (max-width:1000px) {
        height:100vh;
        width:375px;
        padding:18px 10px;
    }
`
const Button = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 429px;
    left:396px;
    width: 180px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #009EDD;  
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700; 
`
const SmallButton = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 430px;
    left:87px;
    width: 180px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #009EDD;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700; 
`
