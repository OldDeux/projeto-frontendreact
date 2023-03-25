import React from 'react'
import { Lista } from '../../../assents/productList'
import { Btn } from '../../ProductCard/ProductCardStyle'
import { BtnRemove, CartStyle, ItemCart, StyleCart, StyleCartText, Total } from './CartStyle'

const Cart = (props) => {

  const { cart, setCart, remove } = props
  
  let soma = 0
  for(let item of cart){
    const mult = item.value * item.amount
    soma = soma + mult
  }

    return (

      <CartStyle>
        <h2>Carrinho</h2>
        <StyleCart>
          {cart.map((item, indice) =>
            <ItemCart key={indice}>
              <StyleCartText><h3>{item.name}</h3> <p>Qtd:{item.amount}</p></StyleCartText>
              <h3>R$:{item.value.toFixed([2])}</h3>
              <BtnRemove onClick={() => remove(item, indice)}>Remover</BtnRemove>
            </ItemCart>

          )
          }
        </StyleCart>
        <Total>Total: {soma.toFixed([2])}</Total>
      </CartStyle>

    )
  }

  export default Cart