const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000

app.use(express.json());

const jsauthRoutes = require("./routes/jsauthRoute");
app.use("/jsauth", jsauthRoutes);

const jsuserdetailRoutes = require("./routes/jsuserdetailRoute");
app.use("/jsuserdetail", jsuserdetailRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

mongodb: mongoose.connect("mongodb://localhost:27017/jobOrbitDB");