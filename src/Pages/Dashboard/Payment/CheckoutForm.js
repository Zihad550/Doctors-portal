import { Alert, Button, CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ appointment }) => {
  const { price, _id } = appointment;
  console.log(appointment);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://fierce-chamber-73617.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data));
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      setError("");
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess(false);
      console.log("got an error", intentError);
    } else {
      setError("");
      setProcessing(false);
      setSuccess(true);
      // save to database

      const payment = {
        amount: paymentIntent.amount,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
      };
      fetch(`https://fierce-chamber-73617.herokuapp.com/appointments/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            type="submit"
            color={!error ? "secondary" : "error"}
            disabled={!stripe || success}
          >
            Pay ${price}
          </Button>
        )}

        {error && <Alert severity="error">{error} </Alert>}
        {success && <Alert severity="success">Success fully payed. </Alert>}
      </form>
    </div>
  );
};

export default CheckoutForm;
