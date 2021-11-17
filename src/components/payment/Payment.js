import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../basket/CheckoutProduct';
import "./Payment.css"

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                {/* section payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Jr. Galvez N° 186</p>
                        <p>SMP, Lima</p>
                    </div>
                </div>
                {/* section payment review */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* section payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Magic */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// 5:35:18

export default Payment
