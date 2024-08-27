import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Process payment and handle the response
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="card-element">Credit or debit card</label>
        <CardElement id="card-element" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="bg-green-500 text-white p-2 rounded"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
