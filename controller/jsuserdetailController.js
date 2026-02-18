
var JSUserDetail = require("../model/jsuserdetailModel");
const asyncHandler = require("express-async-handler");
var validator = require('validator');
const ResponseHandler = require("../resource/responseHandler");

const getUserDetails = asyncHandler(async (request, response) => {

    const userId = request.query.userId;
    const jsUserDetail = await JSUserDetail.find({ uId: userId })
    ResponseHandler.sendSuccess(response, 200, { result: jsUserDetail });
});

const registerJSUserDetail = asyncHandler(async (request, response) => {
  const { uId,firstName, lastName, city, field, education, experienceType, experienceYears, description } = request.body;

  if (!validator.isLength(firstName,{min:2,max:15})) {
          throw new Error("Please enter valid first name");
  }

   if (!validator.isLength(lastName,{min:2,max:15})) {
          throw new Error("Please enter valid last name");
  }

   if (!validator.isLength(city,{min:2,max:15})) {
          throw new Error("Please enter valid city name");
  }

   if (!validator.isLength(field,{min:2,max:15})) {
          throw new Error("Please enter valid field");
  }

   if (!validator.isLength(education,{min:2,max:15})) {
          throw new Error("Please enter valid education");
  }

   if (!validator.isLength(experienceType,{min:2,max:15})) {
          throw new Error("Please enter a valid experience type");
  }

   if (!validator.isLength(experienceYears,{min:2,max:15})) {
          throw new Error("Please enter valid experience years");
  }

   if (!validator.isLength(description,{min:10,max:150})) {
          throw new Error("Please enter a valid description");
      }
      
  const newJSUserDetail = await JSUserDetail.create({
    uId: uId,
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

const updateJSUserDetail = asyncHandler(async (request, response) => {
  const { uId,firstName, lastName, city, field, education, experienceType, experienceYears, description } = request.body;

  if (!validator.isLength(firstName,{min:2,max:15})) {
          throw new Error("Please enter valid first name");
  }

   if (!validator.isLength(lastName,{min:2,max:15})) {
          throw new Error("Please enter valid last name");
  }

   if (!validator.isLength(city,{min:2,max:15})) {
          throw new Error("Please enter valid city name");
  }

   if (!validator.isLength(field,{min:2,max:15})) {
          throw new Error("Please enter valid field");
  }

   if (!validator.isLength(education,{min:2,max:15})) {
          throw new Error("Please enter valid education");
  }

   if (!validator.isLength(experienceType,{min:2,max:15})) {
          throw new Error("Please enter a valid experience type");
  }

   if (!validator.isLength(experienceYears,{min:2,max:15})) {
          throw new Error("Please enter valid experience years");
  }

   if (!validator.isLength(description,{min:10,max:150})) {
          throw new Error("Please enter a valid description");
      }
      
  const query = { uId: uId };
    const update = {
    $set: {
    firstName: firstName,
    lastName: lastName,
    city: city,
    field: field,
    education: education,
    experienceType: experienceType,
    experienceYears: experienceYears,
      description: description
    }
  };
  
  const option = { upsert: false };
  const updatedDetail = await JSUserDetail.updateOne(query, update, option);

  ResponseHandler.sendSuccess(response, 200, { result: updatedDetail });
});

module.exports = {
    registerJSUserDetail,getUserDetails,updateJSUserDetail
}