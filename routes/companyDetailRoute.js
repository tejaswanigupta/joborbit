
const express = require('express')

let router = express.Router()

const {
    registerJSCompanyDetail,getCompanyDetails,updateCompanyDetail
} = require("../controller/companyDetailController");

router.route("/").post(registerJSCompanyDetail);
router.route("/").get(getCompanyDetails);
router.route("/").put(updateCompanyDetail);

module.exports = router;