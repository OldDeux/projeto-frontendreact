import Home from "./Components/ProductList/Home/Home";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from "react";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import { Lista } from "./assents/productList";
import item from "./Components/ProductCard/ProductCard"


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 150vh;
`

function App() {
  const onChangeMinFilter = (e) => {
    setMinFilter(e.target.value);
  };

  const onChangeMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  };

  const onChangeSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };
// ler sobre find index
  const addCart = (produto) => {
    const existingItem = cart.find((item) => {
      return item.id === produto.id});
    if (existingItem) {
      const newCart = cart.map((item) => {
        item.amount += 1
         return item
      })
      setCart(newCart)
    } else {
      setCart([...cart,produto])
    }

  
 /*  const newItemAdd = {
    id: Lista[index].id,
    name: Lista[index].name,
    price: Lista[index].value,
    amount: Lista[index].amount
  }
  setCart([...cart, newItemAdd]) */

};

/*  const numOrdination = () => {
    if (ordination = 'crescente') { 
      setOrdination.sort((num1, num2) => num1 - num2) 
    }
    if (ordination = 'decrescente') { 
      setOrdination.sort((num1, num2) => num2 - num1) 
    }
  } */

/* function handleAddToCart(product) {
  const existingItem = cartItems.find((item) => item.id === product.id);
  if (existingItem) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
} */

const [minFilter, setMinFilter] = useState("")
const [maxFilter, setMaxFilter] = useState("");
const [searchFilter, setSearchFilter] = useState("");
const [cart, setCart] = useState([]);
const [amount, setAmount] = useState("");
const [ordination, setOrdination] = useState("");


const remove = () => {

}


return (
  <>

    <GlobalStyles />
    <Header />
    <Container>
      <Filters
        minFilter={minFilter}
        onChangeMinFilter={onChangeMinFilter}
        maxFilter={maxFilter}
        onChangeMaxFilter={onChangeMaxFilter}
        searchFilter={searchFilter}
        onChangeSearchFilter={onChangeSearchFilter}
      />
      <Home
        Lista={Lista}
        amount={amount}
        onChangeAmount={onChangeAmount}
        cart={cart}
        addCart={addCart}

      />
      <Cart
        amount={amount}
        onChangeAmount={onChangeAmount}
        cart={cart}
        setCart={setCart}
      />
    </Container>

  </>
);
}

export default App;
