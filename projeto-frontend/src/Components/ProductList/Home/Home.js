import React, { useState } from 'react'
import { HomeStyle, DivUm, DivDois } from './HomeStyle'
import ProductCard from '../../ProductCard/ProductCard'
import { Lista } from '../../../assents/productList'


const Home = (props) => {

    const { addCart, onChangeOrder, order, listaFiltrada } = props


    return (
        <>
            <HomeStyle>
                <DivUm>
                    <p>Quantidade de produtos: {listaFiltrada.length}</p>
                    <label >Ordenação:
                        <select value={order} onChange={onChangeOrder}>
                            <option value="">Ordenar</option>
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>
                </DivUm>
                <DivDois>
                    <ProductCard
                        order={order}
                        addCart={addCart}
                        listaFiltrada={listaFiltrada} />
                </DivDois>
            </HomeStyle>
        </>
    )
}

export default Home