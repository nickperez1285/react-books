import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'
import { Link } from 'react-router-dom';


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const {cart} = useContext(CartContext)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item}/>
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<Link to = "/checkout ">
				<button>Checkout</button>
				</Link> 
			</div>
		</div>
	);
};

export default ShoppingCart;
