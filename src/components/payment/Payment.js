import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../basket/CheckoutProduct';
import "./Payment.css"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

// npm install @stripe/stripe-js
// npm install @stripe/react-stripe-js

function Payment() {

    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    // Reference stripe
    const stripe = useStripe();

    // pass safely information payment
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // general stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",

                // Stripe expectss the total in currencies subunits
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            }); 
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("Secret is: ", clientSecret)

    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        // confirm exist payment
        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate("/orders")
        }) 
    }

    const handleChange = e => {
        // Listen for changes in the card element
        // and display errors as the customer types their details
        setDisabled(e.empty);

        // show error -> your card number is invalid
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
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
                        <form onSubmit={handleSubmit}>
                            {/* Collect all details credit card */}
                            <CardElement onChange={handleChange} />
                            {/* <CardNumberElement /> -> Collect number card */}
                            {/* <CardExpiryElement /> -> Collect Expiry card */}
                            {/* <CardCvcElement /> -> Collect CVC card */}
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* ERROR */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 6:35:11

export default Payment
