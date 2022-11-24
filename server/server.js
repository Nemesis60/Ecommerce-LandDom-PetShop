const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const path = require('path')
const { logger, logEvents } = require('./Middleware/logger');
const errorHandler = require('./Middleware/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const bodyParser = require('body-parser');

const userRoute = require('./Routes/userRoutes');
const authRoute = require('./Routes/authRoutes');
const productRoute = require('./Routes/productRoutes');
const cartRoute = require('./Routes/cartRoutes');
const orderRoute = require('./Routes/orderRoutes');
const stripeRoute = require('./Routes/stripe');

console.log (process.env.NODE_ENV)

connectDB();

app.use(logger);
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'Views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: "404 Not Found " })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

const PORT = 5000;

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => console.log(`server active in the port ${PORT}`));
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
