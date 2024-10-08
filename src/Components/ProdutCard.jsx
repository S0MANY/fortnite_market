function ProductCard(props) {
    return(
        <div id={props.id} className={`item ${props.rarity.id}`}>
            <div className="item__img"><img src={props.images.icon_background} alt="product-icon"/></div>
            <div className="item__name"><h2>{props.name}</h2></div>
            <div className="item__desc"><p>{props.description.length > 30 ? `${props.description.slice(0,30)}...` : props.description}</p></div>
            <div className="item__checkout">
                <div className="item__price">Price: {props.price === 0 ? "Free" : props.price}</div>
                <div onClick={() => props.addCart(props.id)} className="item__buy">Add Cart</div>
            </div> 
        </div>
    )
}

export { ProductCard }