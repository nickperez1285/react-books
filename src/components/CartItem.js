import React, {useContext} from 'react';
import {CartContext} from '../contexts/CartContext'


const Item = props => {
	const {removeItem} = useContext(CartContext)


	return (
		<div className="shopping-cart_item">
			<a href = {props.link}>
				<img src={props.image} alt={`${props.title} book`} />
			</a>
			<div>
				<a href = {props.link}>
					<h1>{props.title}</h1>
					<p>$ {props.price}</p>
				</a>
				<button onClick={()=>removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
