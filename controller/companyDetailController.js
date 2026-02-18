
var JSCompanyDetail = require("../model/companyDetailModel");
const asyncHandler = require("express-async-handler");
var validator = require('validator');
const ResponseHandler = require("../resource/responseHandler");

const getCompanyDetails = asyncHandler(async (request, response) => {

    const companyId = request.query.companyId;
    const jsCompanyDetail = await JSCompanyDetail.find({ companyId: companyId })
    ResponseHandler.sendSuccess(response, 200, { result: jsCompanyDetail });
});

const registerJSCompanyDetail = asyncHandler(async (request, response) => {
    const { companyId, name, address, size, type } = request.body;

   
    if (!validator.isLength(name, { min: 2, max: 15 })) {
        throw new Error("Please enter valid company name");
    }
    if (!validator.isLength(address, { min: 2, max: 15 })) {
        throw new Error("Please enter valid address");
    }
    if (!validator.isLength(size, { min: 2, max: 15 })) {
        throw new Error("Please enter valid size of company");
    }
    if (!validator.isLength(type, { min: 2, max: 15 })) {
        throw new Error("Please enter type of company");
    }
    const newJSCompanyDetail = await JSCompanyDetail.create({
        companyId: companyId,
        name: name,
        address: address,
        size: size,
        type: type
    });
    ResponseHandler.sendSuccess(response, 200, { newJSCompanyDetail: newJSCompanyDetail })
});

const updateCompanyDetail = asyncHandler(async (request, response) => {
    const { companyId, name, address, size, type } = request.body;

   
    if (!validator.isLength(name, { min: 2, max: 15 })) {
        throw new Error("Please enter valid company name");
    }
    if (!validator.isLength(address, { min: 2, max: 15 })) {
        throw new Error("Please enter valid address");
    }
    if (!validator.isLength(size, { min: 2, max: 15 })) {
        throw new Error("Please enter valid size of company");
    }
    if (!validator.isLength(type, { min: 2, max: 15 })) {
        throw new Error("Please enter type of company");
    }

    const query = { companyId: companyId };
    const update = { $set: { name: name, address: address, size: size, type: type } };
    const option = { upsert: false };

    const updatedDetail = await JSCompanyDetail.updateOne(query, update, option);

    ResponseHandler.sendSuccess(response, 200, { result: updatedDetail })
});

module.exports = {
    registerJSCompanyDetail,getCompanyDetails,updateCompanyDetail
}