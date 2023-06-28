import styled from 'styled-components'
import minus from '../Assets/imagens/Minus.png'
import plus from '../Assets/imagens/Plus.png'
import lixeira from '../Assets/imagens/Lixeira.png'
import { useContext } from 'react';
import Context from '../Pages/Context'
import { contarElemento, removerPrimeiraOcorrencia, arrangeById } from '../utils'
import SmallCartFooter from './smallCartFooter'

export function SmallCartItems() {
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
            <SmallCartList>
                {
                    movieList && movieInfoArr.map((item, index) => (
                        <Items key={index}>
                            <img alt='no image' src={item.movie.image} width={'64px'} height={'82px'} />
                            <InfoBox>
                                <TitlePriceExclude>
                                    <h1>{item.movie.title}</h1>
                                    <h2>R$ {item.movie.price}</h2>
                                    <img alt='no image' src={lixeira} />
                                </TitlePriceExclude>
                                <CounterSubTotal>
                                    <img alt='no image' src={minus} onClick={() => {
                                        removerPrimeiraOcorrencia(incomingInfoArr, item.movie.id);
                                        setSelectedMoviesId(incomingInfoArr);
                                    }} />
                                    <Counter>
                                        {contarElemento(selectedMoviesId, (item.movie.id))}
                                    </Counter>
                                    <img alt='no image' src={plus} onClick={() => {
                                        incomingInfoArr.push('' + item.movie.id);
                                        setSelectedMoviesId(incomingInfoArr)
                                    }} />
                                    <SubTotal>
                                        <h1>SUBTOTAL</h1>
                                        <h2>R$ {(item.movie.price * contarElemento(incomingInfoArr, (item.movie.id))).toFixed(2)}</h2>
                                    </SubTotal>
                                </CounterSubTotal>
                            </InfoBox>
                        </Items>
                    ))}
                <SmallCartFooter />
            </SmallCartList>
        )
    }
}

const SmallCartList = styled.div`
    position:relative;
    display: flex;
    margin-left:6px;
    width: 343px;
    height: 716px;
    box-sizing:border-box;
    margin-bottom: 16px;
    flex-wrap:wrap;
    flex-shrink: 0; 
    border-radius: 4px;
    background: #FFF; 
`

const InfoBox = styled.div`
    width:231px;
    height:76px;
    display:flex;
    flex-direction:column;
`

const Items = styled.div`
    display:flex;
    justify-content:space-between;
    width:311px;
    margin-bottom:16px;
`

const TitlePriceExclude = styled.div`
    display: flex;
    width: 231px;
    justify-content:space-between;
    margin-bottom:16px;
    box-sizing:border-box;
    h1{
        all:unset;
        width:117px;
        color: #2F2E41;
        font-size: 14px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    h2{
        all:unset;
        width:66px;
        color: #2F2E41;
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    img{
        width:16px;
        height:18px;
    }
`

const CounterSubTotal = styled.div`
    width:231px;
    height:38px;
    display:flex;
    align-items:center;
    img{
        height:18px
    }
`

const Counter = styled.div`
    display:flex;
    width:59px;
    height:26px;
    margin:0px 11px;
    box-sizing:border-box;
    align-items:center;
    padding: 16px 12px;
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    color: #2F2E41;
    font-size: 14px;
    font-family: Open Sans; 
`

const SubTotal = styled.div`
    display: flex;
    width: 98px;
    flex-direction: column;
    justify-content: center;
    align-items:flex-end;
    h1{ 
        height:16px;
        color: #999;
        font-size: 12px;
        font-family: Open Sans;
        font-weight: 700; 
    }
    h2{ 
        height:22px;
        color: #2F2E41;
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 700; 
    }
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

const Divider = styled.div`
    height: 1px;
    width:902px;
    align-self: stretch;
    background-color:#999999;
    margin-top:21px;
    margin-bottom:21px;
`

const MinusButton = styled.button`
    all:unset;
    width: 18px;
    height: 18px; 
`
