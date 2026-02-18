const express = require('express')
let router = express.Router()

const {
    registerJSUserDetail,getUserDetails,updateJSUserDetail
} = require("../controller/jsuserdetailController");


router.route("/").post(registerJSUserDetail);
router.route("/").get(getUserDetails);
router.route("/").put(updateJSUserDetail);




module.exports = router;