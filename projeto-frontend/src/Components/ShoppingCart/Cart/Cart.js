import React from 'react'
import { Btn } from '../../ProductCard/ProductCardStyle'
import { BtnRemove, CartStyle, ItemCart, StyleCartText } from './CartStyle'

const Cart = (props) => {

  const { amount, onChangeAmount, cart, setCart } = props
  const handleAddToCart = (product) =>{
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  }
  
  return (
    <>
      <CartStyle>
        {cart.map((item, indice) =>
          <ItemCart key={indice}>
            <StyleCartText><h3>{item.name}</h3> <p>Qtd:{item.amount}</p></StyleCartText>
            <h3>R$:{item.price}</h3>
            <BtnRemove /* onClick={handleAddToCart} */>Remover</BtnRemove>
          </ItemCart>
        )
        }
      </CartStyle>
    </>
  )
}

export default Cart