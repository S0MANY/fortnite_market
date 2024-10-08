import logo from '../img/logo-removebg-preview.png'
import { Cart } from '../Components/Cart'
import { useState } from 'react'

function Header(props) {


    const [isVisible , setVisibility] = useState(false)

    const togleCart = () => {
        isVisible ? setVisibility(false) : setVisibility(true)
    }

    return (
        <header>
            <div className="head">
                <div className="menuIcon">
                    <img style={{height:"40px"}}  src="https://img.icons8.com/?size=100&id=8113&format=png&color=4AD8F0" alt="menu-icon" />
                </div>
                <nav>
                    <div className="link active"><a href="!#">Items</a></div>
                    <div className="link"><a href="!#">Upcoming</a></div>
                    <div className="link"><a href="!#">Top</a></div>
                </nav>
                <div className="logo">
                    <img className='logo-img' style={{width:"100px"}} src={logo} alt="logo" /> 
                </div>
                <div onClick={() => togleCart()} className="cart">
                    <img style={{height:"40px"}}  src="https://img.icons8.com/?size=100&id=42382&format=png&color=4AD8F0" alt="cart-icon" />
                    {props.cartItems.length === 0? "" :<div className="cartCount">{props.cartItems.length}</div>}
                </div>
            </div>
            <Cart price={props.price} remCart={props.remCart} cartItems={props.cartItems} isVisible={isVisible}/> 
            
        </header>
    )
}

export { Header }