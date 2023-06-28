import styled from 'styled-components'
import logo from '../Assets/imagens/shoppingcart.png'
import { useContext } from 'react'
import Context from '../Pages/Context'

export default function MovieCard({ movie, index }) {
    const [selectedMoviesId, setSelectedMoviesId] = useContext(Context)
    function onClick(e) {
        if (e.target.isselected) {
            e.target.style.background = '#009EDD'
            e.target.isselected = false
            e.target.innerHTML = `
                <img src= ${logo} />
                <h1>0</h1>
                <h2>ADICIONAR AO CARRINHO</h2>
                `
            let arr = []
            if (selectedMoviesId) arr = [...selectedMoviesId]
            let i = arr.indexOf(e.target.id)
            arr.splice(i, 1)
            setSelectedMoviesId(arr)
        }
        else {
            e.target.style.background = '#039B00'
            e.target.isselected = true
            e.target.innerHTML = `
                <img src= ${logo} />
                <h1>1</h1>
                <h2>ITEM ADICIONADO</h2>
                `
            let arr = []
            if (selectedMoviesId) arr = [...selectedMoviesId]
            arr.push(e.target.id)
            setSelectedMoviesId(arr)
        }
    }
    return (
        <Card key={index}>
            <img alt='no image' src={movie.image} />
            <h1>{movie.title}</h1>
            <h2>R$ {movie.price}</h2>
            <Button id={movie.id} isselected={false} onClick={onClick}>
                <img alt='no image' src={logo} />
                <h1>0</h1>
                <h2>ADICIONAR AO CARRINHO</h2>
            </Button>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    box-sizing:border-box;
    flex-direction:column;
    padding: 10px 11px;
    align-items:center;
    width:310px;
    height:305px;
    @media (max-width:1000px) {
        height:305px;
        width:343px;
        margin-right:0px;
        margin-left:6px;
    }
    margin-right:16px;
    margin-bottom:16px;
    border-radius: 4px;
    background: #FFF;
    img{
        height:188px;
        width:147px;
        margin-bottom:7px;
    }
    h1{
        all:unset;
        color: #333;
        text-align: center;
        font-size: 12px;
        font-family: Open Sans;
        font-weight: 700;
        margin-bottom:2px;
    }
    h2{
        all:unset;
        color: #2F2E41;
        text-align: center;
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 700;
        margin-bottom:8px;
    }
`

const Button = styled.button`
    all:unset;
    position:relative;
    background: #009EDD;
    box-sizing:border-box;
    height: 40px;
    width:287px;
    @media (max-width:1000px) {
        height:40px;
        width:321px;
        padding:18px 10px;
    }
    padding: 8px 48px;
    border-radius: 4px;
    gap: 12px;
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-family: Open Sans;
    font-weight: 700;
    img{
        pointer-events:none;
        position:absolute;
        left:48px;
        top:12px;
        height:14px;
        width:14px;
    }
    h1{
        pointer-events:none;
        all:unset;
        position:absolute;
        left: 66px;
        top:13px;
        color: #FFF;
        font-size: 12px;
        font-family: Open Sans;
        margin-right:12px;
    }
    h2{
        pointer-events:none;
        position:absolute;
        top:13px;
        right:48px;
        width:157px;
        height:18px;
        color: #FFF;
        text-align: center;
        font-size: 12px;
        font-family: Open Sans;
        font-weight: 700; 
    }
`
