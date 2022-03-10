import React from 'react'
import Header from './Header'
import Payment from './payment/Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_STRIPE_KEY

// key public stripe   
const promise = loadStripe(`pk_test_51JxDm5GHCZYEZOnNko8EbNUoIZHE5kXLVGSo98tCyZGzDpOjVwv5uMbHDSJnlYuPxX5QHT5gtZcO4z0utJLEKPBB00niA4iWW2`);

function PaymentPage() {
    return (
        <div>
            <Header />
            {/* Access object stripe */}
            <Elements stripe={promise}>
                <Payment />
            </Elements>
        </div>
    )
}

export default PaymentPage
