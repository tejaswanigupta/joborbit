
var JSUserDetail = require("../model/jsuserdetailModel")

const registerJSUserDetail = async (request, response) => {
    const {firstName ,lastName, city, field, education, experienceType,experienceYears,description} = request.body;

    try {
       const newJSUserDetail =await JSUserDetail.create({
        firstName: firstName,
           lastName: lastName,
           city: city,
           field: field,
           education: education,
           experienceType: experienceType,
           experienceYears: experienceYears,
           description: description
   });

        response.json({
        status: "success",
        newJSUserDetail: newJSUserDetail,
      });
        
    } catch (error) {

         response.json({
        status: "Failure",
        message: error.message,
         });
        
    }

  
}

module.exports = {
    registerJSUserDetail
}