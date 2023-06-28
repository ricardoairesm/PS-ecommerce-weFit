import styled from 'styled-components'
import minus from '../Assets/imagens/Minus.png'
import plus from '../Assets/imagens/Plus.png'
import lixeira from '../Assets/imagens/Lixeira.png'
import CartFooter from './cartFooter'
import { useContext } from 'react';
import Context from '../Pages/Context'
import { contarElemento, removerPrimeiraOcorrencia, arrangeById, removeArrayMember } from '../utils'

export function CartItems() {
    const [selectedMoviesId, setSelectedMoviesId, movieList] = useContext(Context);
    if (selectedMoviesId.length > 0 && movieList) {
        const incomingInfoArr = [...selectedMoviesId];
        const organizedArr = arrangeById(movieList);
        let movieInfoArr = [];
        const hash = {};
        for (let i = 0; i < selectedMoviesId.length; i++) {
            let id = selectedMoviesId[i]
            const movie = organizedArr[id - 1]
            if (hash[movie.title] === undefined) {
                hash[movie.title] = {
                    id: movie.id,
                    title: movie.title,
                    price: movie.price,
                    image: movie.image,
                    quantity: 1,
                }
            }
            else {
                hash[movie.title].quantity++
            }
        }
        movieInfoArr = Object.keys(hash).map(key => ({ movie: hash[key] }));
        return (
            <CartList>
                <Categories>
                    <h1>PRODUTO</h1>
                    <h2>QTD</h2>
                    <h3>SUBTOTAL</h3>
                </Categories>
                {
                    movieList && movieInfoArr.map((item, index) => (
                        <Items key={index}>
                            <img alt = {'no image'} src={item.movie.image} width={'89px'} height={'114px'} />
                            <TitlePrice>
                                <h1>{item.movie.title}</h1>
                                <h2>R$ {item.movie.price}</h2>
                            </TitlePrice>
                            <FlexDiv>
                                <img alt='no image' src={minus} height={'18px'} onClick={() => {
                                    removerPrimeiraOcorrencia(incomingInfoArr, item.movie.id);
                                    setSelectedMoviesId(incomingInfoArr);
                                }
                                } />
                                <Counter>{
                                    contarElemento(selectedMoviesId, (item.movie.id))
                                }</Counter>
                                <img alt='no image' src={plus} height={'18px'} onClick={() => {
                                    incomingInfoArr.push('' + item.movie.id);
                                    setSelectedMoviesId(incomingInfoArr)
                                }} />
                            </FlexDiv>
                            <Price>R$  {(item.movie.price * contarElemento(incomingInfoArr, (item.movie.id))).toFixed(2)}</Price>
                            <img alt='no image' src={lixeira} onClick={() => {
                                let arr = removeArrayMember(incomingInfoArr, '' + item.movie.id);
                                setSelectedMoviesId(arr)
                            }} />
                        </Items>
                    ))}
                <CartFooter />
            </CartList>
        )
    }
}

const FlexDiv = styled.div`
    display:flex;
    align-items:center;
`

const CartList = styled.div`
    position:relative;
    margin-left:16px;
    border-radius: 4px;
    background: #FFF; 
    width: 950px;
    box-sizing:border-box;
    max-height:600px;
    overflow-y:scroll;
    padding: 24px;
    flex-wrap:wrap;
`

const Categories = styled.div`
    width:902px;
    box-sizing:border-box;
    color: #999;
    margin-bottom:21px;
    font-size: 14px;
    font-family: Open Sans;
    font-weight: 700;
    h1{
        all:unset;
        margin-right:362px;
    }
    h2{
        all:unset;
        margin-right:142px;
    }
    h3{
        all:unset;
    }
`

const Items = styled.div`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    gap: 52px;
    align-self: stretch;
    margin-bottom:16px;
`

const TitlePrice = styled.div`
    display: flex;
    width: 253px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    h1{
        all:unset;
        color: #2F2E41;
        font-size: 14px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    h2{
        all:unset;
        color: #2F2E41;
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 700;
    }
`

const Counter = styled.div`
    margin:11px;
    display: flex;
    width: 62px;
    height: 26px;
    box-sizing:border-box;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    color: #2F2E41;
    text-align: center;
    font-size: 14px;
    font-family: Open Sans;  
`

const Price = styled.div`
    display: flex;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    color: #2F2E41;
    font-size: 16px;
    font-family: Open Sans;
    font-weight: 700; 
`

