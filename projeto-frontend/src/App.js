import Home from "./Components/ProductList/Home/Home";
import Filters from "./Components/Filters/Filters";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from "react";
import Header from "./Components/Header/Header";
import { Lista } from "./assents/productList";



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
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");
  const [order, setOrder] = useState("");


  const onChangeMinFilter = (e) => {
    setMinFilter(e.target.value);
  };

  const onChangeMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  };

  const onChangeSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const onChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const addCart = (produto) => {
    const existingItem = cart.find((item) => {
      return item.id === produto.id
    });
    if (existingItem) {
      const newCart = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...existingItem, amount: existingItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, produto])
    }

  };
  /*  const newItemAdd = {
     id: Lista[index].id,
     name: Lista[index].name,
     price: Lista[index].value,
     amount: Lista[index].amount
   }
   setCart([...cart, newItemAdd]) */

  const remove = (produto, index) => {
    const existingItem = cart.find((item) => {
      return item.id === produto.id
    })
    if (existingItem.amount > 1) {
      const removedor = cart.map((item) => {
        if (item.id === produto.id) {
          return { ...existingItem, amount: existingItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(removedor)
    } else {
      const removedor = [...cart]
      removedor.splice(index, 1)
      setCart(removedor)
    }
  }

  const lowerBusca = searchFilter.toLowerCase()
  const listaFiltrada = Lista.filter((item) =>
    item.name.toLowerCase().includes(lowerBusca))


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
          listaFiltrada={listaFiltrada}
        />
        <Home
          order={order}
          onChangeOrder={onChangeOrder}
          Lista={Lista}
          amount={amount}
          onChangeAmount={onChangeAmount}
          cart={cart}
          addCart={addCart}
          listaFiltrada={listaFiltrada}
        />
        <Cart
          remove={remove}
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
