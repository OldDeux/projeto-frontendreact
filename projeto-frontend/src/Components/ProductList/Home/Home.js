import React, { useState } from 'react'
import { HomeStyle, DivUm, DivDois } from './HomeStyle'
import  ProductCard from '../../ProductCard/ProductCard'
import { Lista } from '../../../assents/productList'


const Home = (props) => {

    const { amount, onChangeAmount, cart, addCart ,ordination, numOrdination,} = props

    
    return (
        <>
            <HomeStyle>
                <DivUm>
                    <p>Quantidade de produtos: {Lista.length}</p>
                    <label >Ordenação:
                        <select value={ordination} onChange={numOrdination}>
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>
                </DivUm>
                <DivDois>
                    <ProductCard addCart={addCart} cart={cart} />
                </DivDois>
            </HomeStyle>
        </>
    )
}

export default Home