import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {clearCart, removeItem} from "../utils/CartSlice"

const Cart = () => {
  const cartItem = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }

  const handleRemoveItem = (id) =>{
    dispatch(removeItem(id));
  }

  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>Cart</h1>
      <div className='text-center'>
      <button className=' bg-black rounded-lg px-4 py-2 my-2 text-white' onClick={handleClearCart}>Clear cart</button>
      </div>
      {cartItem.length === 0 && <h1 className='text-center'>No items in the cart</h1>}
     {cartItem.map((menu)=>(
      <div className='bg-gray-100 w-6/12 my-2 mx-auto text-left p-4 flex justify-between'>
        <div className='w-8/12'>
            <p className='font-bold'>{menu.card.info.name}</p>
            <p> Rs -{menu.card.info.defaultPrice/100}</p>
            <p >{menu.card.info.description}</p>
        </div>
        <div className='w-3/12'>
        <img   src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/'+ menu.card.info.imageId }/>
        <button className=' bg-black rounded-lg px-4 py-2 my-2 text-white' onClick={() => handleRemoveItem(menu.card.info.id)}>Remove item</button>
        </div>
        
      </div>
      
     ))} 

    </div>
  )
}

export default Cart