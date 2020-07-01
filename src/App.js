import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import Cart from './components/Cart';
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
import Checkout from './components/checkout/Checkout'
function App() {
const [products, setProducts] = useState(data);
const [cart, setCart] = useState([]);
const addItem = item => {
	// add the given item to the cart
	setCart([...cart, item])
	// removes item from available ones on home page
	const newProducts = products.filter(pros => pros.id !== item.id )
	// recreates available products list 
	setProducts(newProducts)
};
const removeItem = itemID => {
	// removes item from cart
	const newCart = cart.filter(item => item.id !== itemID)
	const removedItem = cart.filter(item => item.id === itemID)
	// adds removed item back to available products list 
	setProducts([...products, ...removedItem ])
	setCart(newCart)

}
return (
<CartContext.Provider value = {{cart, removeItem}}>
<ProductContext.Provider value={{products, addItem}}>
	<div className="App">
		<Navigation  />
			
			<Route exact path="/">
				<Products />
			</Route>

				<Route path="/cart">
					<Cart />
				</Route>

				<Route path="/checkout">
					<Checkout />
				</Route>
			</div>
</ProductContext.Provider>
</CartContext.Provider>

		);
		}
		export default App;