const express = require('express')
let router = express.Router()

const {
    companyJob
} = require("../controller/companyJobController");

router.route("/").post(companyJob);

module.exports = router;