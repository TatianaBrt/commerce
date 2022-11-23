import React, { useState } from "react"
import { ImList2 } from "react-icons/im";
import Order from "./Order";


export default function Header(props) {
let [cartOpen, setCartOpen]= useState(false);



  return (
    <header>
       <div>
       
             <ul className='nav'>
             
            <li className='logo'>HomeTown</li>
            <li  className='navBar'><ImList2 onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`wish ${cartOpen && "active"}`}/></li>
            <li className='navBar'> <a href='#home'>HOME</a></li>
            <li className='navBar'> <a href='#about'>ABOUT</a></li>
            <li className='navBar'> <a href='#catalog'>CATALOG</a></li>
            <li className='navBar'> <a href='#section'> LOG IN</a></li>
            </ul>
            {cartOpen && (
              <div className="shop-cart">
               {props.orders.map(el=>(
                <Order key={el.id} item={el}/>
               ))}
              </div>
            )}
            </div>
       <div className='presentation'> </div>
    </header>
  )
}



