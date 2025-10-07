const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const checkApiKey = require("./middleware/checkApiKey");

const app = express()
const port = 3000

app.use(express.json());
app.use(checkApiKey);

//to see which endpoint is hit
var morgan = require("morgan");
app.use(morgan("tiny"));


const errorHandler = require("./middleware/errorHandler");

const jsauthRoutes = require("./routes/jsauthRoute");
app.use("/jsauth", jsauthRoutes);

const jsuserdetailRoutes = require("./routes/jsuserdetailRoute");
app.use("/jsuserdetail", jsuserdetailRoutes);



app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

mongodb: mongoose.connect(process.env.MONGO_URL);