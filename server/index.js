const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoute = require('./routes/auth')
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'))

const corsOptions = {
    origin: [
        'http://localhost:3000', 
        'https://keyfindr-api.onrender.com'
    ],
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/auth', authRoute)

app.listen(process.env.PORT, () => {
    console.log(`API is online on port ${process.env.PORT || 4000}`)
})