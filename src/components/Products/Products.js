import React from 'react';

function Products({product,addToCart}) {

    const {id,name,price,image} = product;

  return (
        <div className="col-md-4 mb-5">
            <div className="card" style={{"width" : "18rem", "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title mb-2">{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Serial No: {id}</p>
                    <div className='btn btn-info mt-4' onClick={()=>addToCart(product)}>
                        <a href="#" className="text-white text-decoration-none me-4">Add To Cart</a>
                        <i className="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Products;
