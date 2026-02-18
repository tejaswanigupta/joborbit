const express = require('express')
let router = express.Router()

const {
   registerCompany,loginCompanyUser
} = require("../controller/companyAuthController");


router.route("/").post(registerCompany);
router.route("/login").post(loginCompanyUser)



module.exports = router;