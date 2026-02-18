var CompanyAuth = require("../model/companyAuthModel")
const asyncHandler = require("express-async-handler");
const ResponseHandler = require("../resource/responseHandler");
var validator = require('validator');
const bcrypt = require("bcrypt")

const registerCompany = asyncHandler(async (request, response) => {

    const { email, password } = request.body;

    if (!validator.isEmail(email)) {
        throw new Error("Plesae enter a valid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error("Please choose a strong password");
    }
   
    const hashedPassword = await bcrypt.hash(password, 10);
   
    const newCompany = await CompanyAuth.create({ email: email, password: hashedPassword });
    ResponseHandler.sendSuccess(response, 200, { uId: newCompany.id });
});

const loginCompanyUser = asyncHandler(async (request, response) => {
    const { email, password } = request.body;

    if (!validator.isEmail(email)) {
        throw new Error("Please enter valid email");
    }

    if (!validator.isLength(password,{min:8,max:30})) {
        throw new Error("Please enter valid password");
    }


    const companyUserLogin = await CompanyAuth.findOne({ email: email })
    
    if (companyUserLogin && (await bcrypt.compare(password,companyUserLogin.password))) {
     ResponseHandler.sendSuccess(response, 200, { companyId: companyUserLogin.id });   
    }
    else {
        ResponseHandler.sendFailure(response, 401, { result: "User not found" });
    }
    
});

module.exports = {
    registerCompany,loginCompanyUser
}