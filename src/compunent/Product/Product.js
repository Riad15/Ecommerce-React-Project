import React from 'react';
import ReactModal from '../ReactModal/ReactModal';



const Product = (props) => {
    const { addItem } = props;
    const { title, image } = props.products;
    return (
        <div className='col-md-4' data-aos="zoom-in">
            <div className="card p-3 border mb-4 ">
                <h1>{title.slice(0, 10)}</h1>
                <img className='w-50 m-auto' src={image} alt="" />
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-success' onClick={addItem}>add to cart</button>
                    <button className='btn btn-danger'>update</button>
                    {/* <button className='btn btn-info'>delete</button> */}
                    <ReactModal productInfo={props.products}></ReactModal>
                </div>
            </div>

        </div>
    );
};

export default Product;