import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { addToCard } = props;

    return (
        <div>
            <h1>All Products</h1>
            <div className="row">
                {
                    products.map(product => <Product key={product.id} products={product} addItem={addToCard} ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;