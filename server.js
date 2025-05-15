import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import session from 'express-session';

import connection from './database/dbConnect.js';

dotenv.config();

/**
 * -------------- GENERAL SETUP ----------------
 */

const app = express();
let PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * -------------- SESSION SETUP ----------------
 */

const sessionStore = MongoStore.create({
    client: connection.getClient(),
    collectionName: 'sessions'
});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day
    }
}));

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */




/**
 * -------------- ROUTES ----------------
 */




/**
 * -------------- SERVER ----------------
 */

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});




