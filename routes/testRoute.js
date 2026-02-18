const express = require('express')
let router = express.Router()

const {
   registerCompany
} = require("../controller/companyAuthController");


router.route("/").post(registerCompany);



module.exports = router;