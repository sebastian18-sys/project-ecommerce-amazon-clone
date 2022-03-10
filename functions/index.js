const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JxDm5GHCZYEZOnNgy6n8bb5jGqX5pmrZkHm9uRJ9Wf7pRLQor1iNLIJ5kbosSogs3KeTbSAsOnDKUag5zFRSWm200MohIk141')

// <========= API ===========>


// <========= App config ===========>
const app = express()

// <========= Middlewares ===========>
app.use(cors({ origin: true }));
app.use(express.json());

// <========= API routes ===========>
app.get('/', (req, res) => res.status(200).send("Hello!"))

app.post('/payments/create', async (req, res) => {
    try {
        const { total } = req.body;
        console.log('Payment received >>>>>', total);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(total),
            currency: "eur",
            automatic_payment_methods: {
                enabled: true,
            },
        });
        res.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (err) {
        res.status(400).send(err);
    }  
})

// <========= Listen ===========>
exports.api = functions.https.onRequest(app)

// firebase emulators:start