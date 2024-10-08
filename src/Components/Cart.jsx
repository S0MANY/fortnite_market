
import { CartLiElem } from "./CartLiElem"
function Cart(props) {

    function removeSybil(arr){
        let newArr = []

        for (let item of arr) {
            console.log(item[0].id)
            console.log(newArr)
            if (newArr.some(i => i[0].name === item[0].name)){
                console.log("contin")
                continue
            } else {
                newArr.push(item)
            }
        }
        return newArr
    }

    return (
    <div className={`cartBox ${props.isVisible ? "" : `hide`}`}>
        <div className="name"><h2>My cart</h2></div>
        {props.cartItems.length === 0 ? (
            <div style={{textAlign:"center"}} className="emptyCart"><h3>No items in your cart =/</h3></div>
        ) : (
            <>
                <ul>
                {removeSybil(props.cartItems).map(item => <CartLiElem cartItems={props.cartItems} remCart={props.remCart} key={item[0].id} {...item[0]}/> )}
            </ul>
                <div className="price">{props.price === 0 ? "For free" : `Total price ${props.price}`}</div>
                <div className="forCheckout"><div className="checkout">Checkout</div></div>
            </>
            
        )}

    </div>
    )
}

export { Cart }
