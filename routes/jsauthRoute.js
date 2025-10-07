const express = require('express')
let router = express.Router()

const {
    registerJSUser,loginJSUser
} = require("../controller/jsauthController");


router.route("/").post(registerJSUser);
router.route("/login").post(loginJSUser);


module.exports = router;