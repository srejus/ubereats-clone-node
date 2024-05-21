require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoutes');
const restaurantRoute = require("./routes/restaurantRoutes");
const productRoute = require('./routes/productRoute');

app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server running on port 3000...")
})

app.use("/api/users", userRoute);
app.use("/api/restaurants",restaurantRoute);
app.use("/api/products",productRoute);


// DB connection
mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected to Database!");
})
.catch(() => {
    console.log("Connection failed!");
})