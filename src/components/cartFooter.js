import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../Pages/Context'
import { useNavigate } from 'react-router-dom'
import { getTotalPrice } from '../utils'

export default function CartFooter() {
    const [selectedMoviesId, setSelectedMoviesId, movieList]  = useContext(Context);
    const navigate = useNavigate();
    if (selectedMoviesId && movieList) {
        const totalPrice = getTotalPrice(selectedMoviesId, movieList)
        return (
            <>
                <Background>
                    <Divider />
                    <Footer>
                        <Button onClick={
                            (e) => {
                                e.stopPropagation();
                                setSelectedMoviesId([])
                                navigate('/success')
                            }}  >FINALIZAR PEDIDO</Button>
                        <FinalPrice>
                            <h1>TOTAL</h1>
                            <h2>R$ {totalPrice.toFixed(2)}</h2>
                        </FinalPrice>
                    </Footer >
                </Background>
            </>
        )
    };
}

const Background = styled.div`
    position:sticky;
    bottom:0px;
    background-color:#FFF;
    z-index:1;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`

const Button = styled.button`
    all:unset;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 235.422px;
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

const FinalPrice = styled.div`
    display: flex;
    align-items:center;
    h1{
        color: #999;
        text-align: center;
        font-size: 14px;
        font-family: Open Sans;
        font-weight: 700;
        margin-right:20px;
    }
    h2{
        color: #2F2E41;
        text-align: center;
        font-size: 24px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    
`

const Divider = styled.div`
    height: 1px;
    width:902px;
    align-self: stretch;
    background-color:#999999;
    margin-top:21px;
    margin-bottom:21px;
`

