import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


//TODO: provide publishable Key
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
console.log(stripePromise);
const Payment = () => {
    return (
        <div className='w-full'>
            <SectionTitle
                heading='Please Provide'
                subHeading='Payment Method'
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;