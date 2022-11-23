import React, { useRef, useEffect } from "react";
import { Redirect, useNavigate } from 'react-router-dom';

export default function Paypal(props) {
    const paypal = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                description: props.order_id,
                                amount: {
                                    currency_code: "INR",
                                    value: props.total,
                                },
                            },
                        ],
                    });
            },
            onApprove: async function (data, actions) {
                const order = await actions.order.capture();
                navigate('/confirm');
                // Your code here after capture the order
            },
            onError: (err) => {
                navigate('/failed');
            },

        })

    });
}


