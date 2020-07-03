const express = require('express')


const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res)  => res.send('Hello World!'));

app.use(express.static('public'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
