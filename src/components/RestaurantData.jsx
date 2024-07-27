import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {addItem} from "../utils/CartSlice"


const RestaurantData = () => {
    const [menuData, setMenuData] = useState(null);
    const {resId} = useParams();
    
useEffect(()=>{
    fetchMenu();
}, [])

const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4938662&lng=78.33088149999999&restaurantId=" + resId);
    const json = await data.json();
    setMenuData(json.data);
}

const dispatch = useDispatch();

const handleAddItem = (menu) =>{
  dispatch(addItem(menu));
}

if(menuData === null)  return <h1>No data</h1>;

const {name, costForTwoMessage} = menuData.cards[2].card.card.info;
const {itemCards} = menuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className='text-center'>
        <h1 className='text-xl font-bold'>{name} - {costForTwoMessage}</h1>
        {itemCards.map((menu)=>(<div className='bg-gray-100 w-6/12 my-2 mx-auto text-left p-4 flex justify-between' key={menu.card.info.id}>
          <div className='w-9/12'>
          <p className='font-bold'>{menu.card.info.name}</p>
          <p> Rs -{menu.card.info.defaultPrice/100}</p>
          <p >{menu.card.info.description}</p>
          </div>
          <div className='w-2/12 '>
          <img   src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/'+ menu.card.info.imageId }/>
          <button className='absolute bg-black rounded-lg px-4 py-2 my-2 text-white' onClick={()=>handleAddItem(menu)}>Add</button>
          </div>
          
        </div>))}
    </div>
  )
}

export default RestaurantData