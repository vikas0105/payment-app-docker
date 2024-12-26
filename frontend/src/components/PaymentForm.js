import React, { useState } from 'react';

function PaymentForm() {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://backend:8080/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(paymentData),
            });
            const result = await res.text();
            setResponseMessage(result);
        } catch (error) {
            setResponseMessage('Payment failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="cardNumber" placeholder="Card Number" value={paymentData.cardNumber} onChange={handleChange} />
                <input type="text" name="expiryDate" placeholder="Expiry Date" value={paymentData.expiryDate} onChange={handleChange} />
                <input type="text" name="cvv" placeholder="CVV" value={paymentData.cvv} onChange={handleChange} />
                <input type="number" name="amount" placeholder="Amount" value={paymentData.amount} onChange={handleChange} />
                <button type="submit">Pay Now</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default PaymentForm;
