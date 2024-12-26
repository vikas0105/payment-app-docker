package com.payment;

public class Payment {
    private String cardNumber;
    private String expiryDate;
    private String cvv;
    private double amount;

    // Getters and Setters
    public String getCardNumber() { return cardNumber; }
    public void setCardNumber(String cardNumber) { this.cardNumber = cardNumber; }
    public String getExpiryDate() { return expiryDate; }
    public void setExpiryDate(String expiryDate) { this.expiryDate = expiryDate; }
    public String getCvv() { return cvv; }
    public void setCvv(String cvv) { this.cvv = cvv; }
    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }
}
