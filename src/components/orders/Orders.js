import React, { useState, useEffect } from 'react';
import "./Orders.css";
import { db } from "../../firebase"
import { onSnapshot, query, collection, orderBy } from "firebase/firestore"
import { useStateValue } from '../../StateProvider';
import Order from './Order';

function Orders() {

    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            const q = query(collection(db, "users", user?.uid, "orders"), orderBy("created", "desc"))
            onSnapshot(q, snapshot => {
                setOrders(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>
            <div className='orders__order'>
                {orders?.map((order, index) => (
                    <Order
                        key={index} 
                        order={order} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders
