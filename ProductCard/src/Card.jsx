function Card(props) {
    return (
        <div className="card">
            <div className="card-content">

                <img
                    className="product-image"
                    src={props.image}
                    alt={props.name}
                />

                <h3>{props.name}</h3>

                <p className="description">
                    {props.description}
                </p>

                <p className="price">
                    {props.price}
                </p>

                <p className={props.available ? "available" : "unavailable"}>
                    {props.available ? "✓ Available" : "✕ Out of Stock"}
                </p>

                <div className="buttons">

                {props.available && (
                <button
                className="buy-btn"
                onClick={props.onAddToCart}
                >
            {props.buy}
            </button>
)}
                {!props.available ? (

    <button className="cart-btn" disabled>
        Out of Stock
    </button>

) : props.quantity === 0 ? (

    <button
        className="cart-btn"
        onClick={props.onAddToCart}
    >
        Add to Cart
    </button>

) : (

    <div className="quantity-control">

        <button onClick={props.onDecrease}>
            −
        </button>

        <span>{props.quantity}</span>

        <button onClick={props.onIncrease}>
            +
        </button>

    </div>

)}
            </div>
            </div>
        </div>
    )
}
export default Card