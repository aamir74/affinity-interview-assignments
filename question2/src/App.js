import { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import { CartContext } from "./context/cart-context";
import HomePage from './pages/HomePage';
import MainNavigation from "./components/MainNavigation";
import './App.css'

const App = () => {

  const [cartItems, setCartItems] = useState([])

  const cart = useCallback((cartData) => {
    setCartItems(cartData)
  })

  return (
    <CartContext.Provider
      value={
        {
          cartItems: cartItems,
          cart: cart
        }
      }
    >
      <Router>
        <MainNavigation />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </CartContext.Provider >
  );
}

export default App;
