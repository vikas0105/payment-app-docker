package com.payment;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public boolean processPayment(Payment payment) {
        // Basic validation
        return payment.getAmount() > 0;
    }
}
