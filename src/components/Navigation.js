import React,{useContext} from 'react';
import {CartContext} from '../contexts/CartContext'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const {cart} = useContext(CartContext)

	return (
<div className = 'top'>
	<center><NavLink to="/"> <h1 > BOOKS R US </h1></NavLink> </center>
		<div className="navigation">
			<NavLink to="/">Shop</NavLink>
			<NavLink to="/cart">Cart <span>{cart.length}</span></NavLink>
		</div>
</div>
	);
};

export default Navigation;
