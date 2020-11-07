import React, { useEffect, useState } from 'react'
import {db} from './firebase'
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [{cart, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    const notSignedIn = () => {
        return (
            <h3>Please sign in to view your order history.</h3>
        )
    };

    useEffect(() => {
        if (user) {
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))
        } else {
            setOrders([]);
        }
    }, [user]);
        

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            {!user && notSignedIn()}
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    )
}

export default Orders
