import React, { useState } from 'react'
import { Lista } from '../../assents/productList'
import { Box, Btn, Dscpt, Img, ProductCardStyle } from './ProductCardStyle'


const ProductCard = (props) => {
    const {cart, addCart} = props

    return (

        <ProductCardStyle>

            {Lista.map((item, index) =>
                <Box key={index}>
                    <Img src={item.imageUrl} />
                    <Dscpt>
                        <p>{item.name}</p>
                        <p>R$: {item.value}</p>
                    </Dscpt>
                    <Btn onClick={()=>addCart(item)}>Adicione ao carrinho</Btn>
                </Box>
            )}


        </ProductCardStyle>

    )
}

export default ProductCard