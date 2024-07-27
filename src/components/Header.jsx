import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () =>{
    const [value , setValue] = useState("login");

    const login = () => {
        value === "login" ? setValue("logout") : setValue("login")
    } 

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext)
    
    const cartItem = useSelector((store)=>store.cart.items)
    console.log(cartItem)

    
    return (
        <>
        <div className='header'>
            <div className='logo-container'>
                <img src='https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png' className='logo'/>
            </div>
            <div className='navigation'>
                <ul>
                    <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart ({cartItem.length}) </Link></li>
                    
                    <li>
                        <button className='bg-black px-4 py-2 text-white rounded-lg' onClick={login}>{value}</button>
                    </li>
                    <li className='font-bold'>{loggedInUser}</li>

                    
                </ul>
            </div>
        </div>
        </>
    )
}
export default Header