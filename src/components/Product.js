import React, {useContext} from 'react';
import { Link } from 'react-router-dom';




const Product = props => {

	return (
		<div className="product">
		<a href = {props.product.link}>
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>
			</a>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
		// < {props.product.link} ?   a href = {props.product.link} :a href =  "https://www.amazon.com">

