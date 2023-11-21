import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';


//TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
console.log(stripePromise);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className='w-full'>
            <SectionTitle
                heading='Please Provide'
                subHeading='Payment Method'
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckOutForm
                    price={price}
                    cart={cart}
                ></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;