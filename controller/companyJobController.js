
var JSCompanyDetail = require("../model/companyJobModel");
const asyncHandler = require("express-async-handler");
var validator = require('validator');
const ResponseHandler = require("../resource/responseHandler");

const companyJob = asyncHandler(async (request, response) => {
    const {companyId, title, companyName, experience, salary, city, jobDescription, keySkills, workType } = request.body;

    if (!validator.isLength(title, { min: 2, max: 100 })) {
        throw new Error("Please enter valid job title");
    }
    
    if (!validator.isLength(companyName, { min: 2, max: 100 })) {
        throw new Error("Please enter valid company Name");
    }
    
    if (!validator.isLength(experience, { min: 2, max: 100 })) {
        throw new Error("Please enter valid experience");
    }
    
    if (!validator.isLength(salary, { min: 2, max: 100 })) {
        throw new Error("Please enter valid salary");
    }

    if (!validator.isLength(city, { min: 2, max: 100 })) {
        throw new Error("Please enter valid city of company");
    }
    
    if (!validator.isLength(jobDescription, { min: 10, max: 500 })) {
        throw new Error("Please enter valid job Description");
    }
    
    if (!validator.isLength(keySkills, { min: 2, max: 100 })) {
        throw new Error("Please enter valid key skills for job role");
    }
    if (!validator.isLength(workType, { min: 2, max: 100 })) {
        throw new Error("Please enter valid work mode of job");
    }
    
    const newCompanyJob = await JSCompanyDetail.create({
        companyId:companyId,
        jobTitle: title,
        companyName: companyName,
        experience: experience,
        salary: salary,
        city: city,
        jobDescription: jobDescription,
        keySkills: keySkills,
        workType: workType
    });
    ResponseHandler.sendSuccess(response, 200, {
        newCompanyJob: newCompanyJob})
});

module.exports = {
    companyJob
}