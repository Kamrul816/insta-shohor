import React, { useState,useEffect } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

function Shop() {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setProducts(data));
    }, []);


    const addToCart = product =>{
        const newCart = [...carts,product];
        setCarts(newCart);
    }

    const chooseOneProduct = ()=>{
        const cartProducts = carts.length;
        const product = Math.floor((Math.random() * cartProducts));
        alert(carts[product].name);
    }

    const removeFromCart = () =>{
        setCarts([]);
    }


  return (
    <>
        <div className="container-fluid bg-info mb-5">
            <h1 className='text-center text-white fw-5 py-3'>Toyota Car World</h1>
            <h2 className='text-white text-center py-3'>Your Best Choice</h2>
        </div>

        <div className="container-fluid">
            <div className="row d-flex flex-md-row flex-column-reverse">
                <div className="col-md-8">
                    <div className="row">
                    {
                        products.map(product => <Products key={product.id} product={product} addToCart={addToCart}></Products>)
                    }
                    </div>
                </div>
                <div className="ms-5 col-md-3">
                    <div className='cart rounded bg-info'>
                        <h2 className='text-white text-center mb-5'>Selected Products</h2>
                            {
                                carts.map(cart=> <Cart key={cart.id} cart={cart}></Cart>)
                            }
                        <div className='mt-5 d-flex justify-content-around pb-5'>
                        <button className='btn btn-warning' onClick={() => chooseOneProduct()}>Choose One For Me</button>
                        <button className='btn btn-danger' onClick={() => removeFromCart()}>Choose Again</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mb-5">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How React works?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>React is a javascript library. It is declarative, efficient. <br /> This library aims to create a user interface that helps us generate a spa(single page application). <br /> If you want to use this library, you need to know es6 HTML and CSS and a little bit of knowledge about npm(node package manager )
                        you also have to understand how jsx works jsx stands for (javascript XML)
                        to install react, you have put this command in CLI(Command Line Interface).</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                     What is the difference between Props And State?
                    </button>
                    </h2>
                    <div id="collapseOne1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>It is internal and controlled by the component itself, while props are external and controlled by whatever renders the part. <br /> there are lots of differences between props and states 
                    the props are read-only, but on the same hand, state can be modified also Props are immutable and State is mutable Props allow you to pass data from one component to other components as an argument. The state holds information about the components.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Shop;
