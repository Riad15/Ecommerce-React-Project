import React from 'react';

const Product = (props) => {
    const { addItem } = props;
    const { title, id, price, image } = props.products;
    console.log(title, id, price);
    return (
        <div className='col-md-4'>
            <div className="card p-3 border mb-4 ">
                <h1>{title.slice(0, 10)}</h1>
                <img className='w-50 m-auto' src={image} alt="" />
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success' onClick={addItem}>add to cart</button>
                    <button className='btn btn-danger'>update</button>
                    <button className='btn btn-info'>delete</button>
                </div>
            </div>

        </div>
    );
};

export default Product;