import styled from 'styled-components'
import { useContext } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom'
import DefaultHeader from '../components/defaultHeader'
import { screenIsntWideEnough } from '../utils'
import bigOutro from '../Assets/imagens/bigOutro.png'
import smallOutro from '../Assets/imagens/smallOutro.png'

export default function Success() {
    const navigate = useNavigate();
    return (
        <>
            <DefaultBackground>
                <DefaultHeader />
                <Center>
                    <img alt='no image' src={screenIsntWideEnough() ? smallOutro : bigOutro} />
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
};

const Center = styled.div`
position:relative;
`

const Button = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 470px;
    left:390px;
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
    top: 470px;
    left:83px;
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

