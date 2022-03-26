import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Collection.css'


const Collection = () => {
    const [products, setProducts] = useState([]);
    
    useEffect ( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    
    return (
        <div className='container'>
            <div className='items-container'>
                {
                    products.map(product =>
                        <Car key={product.id}
                        product={product}
                        ></Car>)
                }
            </div>
            <div className='carts'>
                
            </div>
        </div>
    );
};

export default Collection;