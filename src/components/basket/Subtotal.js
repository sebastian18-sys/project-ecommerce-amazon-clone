import React from 'react'
import "./Subtotal.css"
import { useNavigate } from 'react-router-dom'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

function Subtotal() {

    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    const validateUser = () => {
        if(user) {
            navigate("/payment")
        } else {
            navigate("/login")
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong> {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                        <button onClick={validateUser}>Proceed to Checkout</button>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
