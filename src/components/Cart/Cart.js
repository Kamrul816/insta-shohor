import React from 'react';

function Cart({cart}) {
  const {name} = cart;
  return (
    <>
        <p className='text-center text-white border-bottom'>{name}</p>
    </>
  );
}

export default Cart;
