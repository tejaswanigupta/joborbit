var JSUser = require("../model/jsauthModel")
const asyncHandler = require("express-async-handler");
const ResponseHandler = require("../resource/responseHandler");
var validator = require('validator');
const bcrypt = require("bcrypt")

const registerJSUser = asyncHandler(async (request, response) => {

    const { email, password } = request.body;

    if (!validator.isEmail(email)) {
        throw new Error("Please enter valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error("Please choose a strong password");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password:", hashedPassword);
    
    const newJSUser = await JSUser.create({ email: email, password: hashedPassword });
    ResponseHandler.sendSuccess(response, 200, { uId: newJSUser.id });
});

const loginJSUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    if (!validator.isEmail(email)) {
        throw new Error("Please enter valid email");
    }

    if (!validator.isLength(password,{min:8,max:15})) {
        throw new Error("Please enter valid password");
    }


    const jsUserLogin = await JSUser.findOne({ email: email })
    ResponseHandler.sendSuccess(response, 200, { uId: jsUserLogin.id });
});

module.exports = {
    registerJSUser,loginJSUser
}