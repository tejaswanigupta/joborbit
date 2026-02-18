const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const checkApiKey = require("./middleware/checkApiKey");

const app = express()
const port = 3002

app.use(express.json());
app.use(checkApiKey);

//to see which endpoint is hit
var morgan = require("morgan");
app.use(morgan("tiny"));


const errorHandler = require("./middleware/errorHandler");

// This is user Routes
const jsauthRoutes = require("./routes/jsauthRoute");
app.use("/jsauth", jsauthRoutes);

const jsuserdetailRoutes = require("./routes/jsuserdetailRoute");
app.use("/jsuserdetail", jsuserdetailRoutes);

// this is company's Route
// const companyAuthRoutes= require("./routes/companyAuthRoute");
// app.use("/company", companyAuthRoutes);

const companyAuthRoutes = require("./routes/companyAuthRoute");
app.use("/company", companyAuthRoutes);

const jsCompanyDetailRoutes = require("./routes/companyDetailRoute");
app.use("/companyDetail", jsCompanyDetailRoutes);

const companyJob = require("./routes/companyJobRoute");
app.use("/job",companyJob)

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

mongodb: mongoose.connect(process.env.MONGO_URL);