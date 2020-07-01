import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import Item from './CartItem';

const Cart = () => {
	const {cart} = useContext(CartContext)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	const taxed = ( price) => { 
		const final =  price * 1.15 ; 
		return final.toFixed(2)
	}

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item}/>
			))}

			<div className="shopping-cart__checkout">
			<div id = 'costs'>
				<p> ${getCartTotal()}</p><br/>
				<p>Tax: ${(getCartTotal() *.15).toFixed(2)}</p><br/>

				<p>Total: ${taxed(getCartTotal())}</p>
			</div> 
				<Link to = "/checkout">
				<button>Checkout</button>
				</Link> 
			</div>
		</div>
	);
};

export default Cart;
