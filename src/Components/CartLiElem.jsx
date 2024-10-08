function CartLiElem(props){
    return (
        <li className={props.name}>
            <div className="item__info">
                <div className="cart__item__img"><img style={{width:"40px"}} src={props.images.icon_background} alt="hero-img" /></div>
                <div className="cart__item__name">{props.name}</div>
                <div className="cart__item__price">{props.price === 0 ? "Free" : props.price * props.cartItems.filter(item=> item[0].name === props.name).length}</div>
            </div>
            <div className="rem_item"><img onClick={() => props.remCart(props.name)} src="https://img.icons8.com/?size=20&id=22922&format=png&color=000000" alt="rem-icon" /></div>
            
        </li>
    )
}

export { CartLiElem }