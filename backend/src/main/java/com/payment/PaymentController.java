package com.payment;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public String makePayment(@RequestBody Payment payment) {
        boolean success = paymentService.processPayment(payment);
        return success ? "Payment Successful!" : "Payment Failed!";
    }
}
