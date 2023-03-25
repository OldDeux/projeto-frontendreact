import React, { useState } from 'react'
import { Lista } from '../../assents/productList'
import { Box, Btn, Dscpt, Img, ProductCardStyle } from './ProductCardStyle'


const ProductCard = (props) => {
    const { addCart,listaFiltrada,order} = props

    return (

        <ProductCardStyle >

            {listaFiltrada.sort((a,b)=> {
                if (order === "crescente"){
                    return a.value - b.value
                }
                if (order === "decrescente"){
                    return b.value - a.value
                }
            })
            .map((item, index) =>
                <Box key={index}>
                    <Img src={item.imageUrl} />
                    <Dscpt>
                        <p>{item.name}</p>
                        <p>R$: {item.value.toFixed([2])}</p>
                    </Dscpt>
                    <Btn onClick={()=>addCart(item)}>Adicione ao carrinho</Btn>
                </Box>
            )}


        </ProductCardStyle>

    )
}

export default ProductCard