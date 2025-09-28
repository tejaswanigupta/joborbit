const express = require('express')
let router = express.Router()

const {
    registerJSUserDetail
} = require("../controller/jsuserdetailController");


router.route("/").post(registerJSUserDetail);



module.exports = router;