import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]=useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('paymentMethod:', paymentMethod);
        }
    }
    return (
        <>
            <form className='w-2/3 m-10' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center'>
                    <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-warning ml-8'>{cardError}</p>}
        </>
    );
};

export default CheckOutForm;