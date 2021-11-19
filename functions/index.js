const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('<secret-key>')

// <========= API ===========>


// <========= App config ===========>
const app = express()

// <========= Middlewares ===========>
app.use(cors({ origin: true }));
app.use(express.json());

// <========= API routes ===========>
app.get('/', (req, res) => res.status(200).send("Hello!"))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment received', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// <========= Listen ===========>
exports.api = functions.https.onRequest(app)

// firebase emulators:start