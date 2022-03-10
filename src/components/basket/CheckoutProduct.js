import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./CheckoutProduct.css"

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {

    const [{}, dispatch] = useStateValue();

    // remove item from the basket
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img loading='lazy' className="checkoutProduct__image" src={image} alt="product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
