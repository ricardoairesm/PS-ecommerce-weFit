import styled from 'styled-components'
import { useContext } from 'react'
import Context from '../Pages/Context'
import { useNavigate } from 'react-router-dom'
import { getTotalPrice } from '../utils'

export default function SmallCartFooter() {
    const [selectedMoviesId, setSelectedMoviesId, movieList] = useContext(Context);
    const navigate = useNavigate();
    if (selectedMoviesId && movieList) {
        const totalPrice = getTotalPrice(selectedMoviesId, movieList)
        return (
            <>
                <Divider />
                <Footer>
                    <FinalPrice>
                        <h1>TOTAL</h1>
                        <h2>R$ {totalPrice.toFixed(2)}</h2>
                    </FinalPrice>
                    <Button onClick={
                        (e) => {
                            e.stopPropagation();
                            setSelectedMoviesId([])
                            navigate('/success')
                        }}  >FINALIZAR PEDIDO</Button>
                </Footer >
            </>
        )
    };
}

const Divider = styled.div`
    position:absolute;
    bottom:98px;
    height: 1px;
    margin:21px 0px;
    width:311px;
    align-self: stretch;
    background-color:#999999;
    margin-top:21px;
    margin-bottom:21px;
`

const Footer = styled.div`
    height:77px;
    box-sizing:border-box;  
    display: flex;
    flex-direction:column;
    align-self: stretch;
    position:absolute;
    bottom:16px;
`

const Button = styled.button`
    all:unset;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 311px;
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
    justify-content:flex-end;
    align-items:center;
    margin-bottom:16px;
    h1{ 
        width:62px;
        margin-right:5px;
        justify-content:center;
        color: #999;
        text-align: center;
        font-size: 14px;
        font-family: Open Sans;
        font-weight: 700;
    }
    h2{ 
        width:131px;    
        color: #2F2E41;
        text-align: center;
        font-size: 24px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    
`
