
var JSUserDetail = require("../model/jsuserdetailModel");
const asyncHandler = require("express-async-handler");
const ResponseHandler = require("../resource/responseHandler");

const registerJSUserDetail = asyncHandler(async (request, response) => {
  const { firstName, lastName, city, field, education, experienceType, experienceYears, description } = request.body;
  const newJSUserDetail = await JSUserDetail.create({
    firstName: firstName,
    lastName: lastName,
    city: city,
    field: field,
    education: education,
    experienceType: experienceType,
    experienceYears: experienceYears,
    description: description
  });
  ResponseHandler.sendSuccess(response, 200, { newJSUserDetail: newJSUserDetail })
});

module.exports = {
    registerJSUserDetail
}