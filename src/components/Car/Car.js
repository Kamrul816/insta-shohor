
import React from 'react';
import './Car.css'

const Car = ({product}) => {
    const {id,image, price, name} = product;

    return (
        <div className='car'>
            <img src={image} alt=""></img>
            <div className='car-info'>
                <p className='car-name'>{name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Serial No: {id}</small></p>
            </div>
            
        </div>
    );
};

export default Car;