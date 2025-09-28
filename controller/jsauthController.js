var JSUser = require("../model/jsauthModel")

const registerJSUser = async (request, response) => {
    const { email, password } = request.body;

    try {
       const newJSUser =await JSUser.create({
            email: email,
            password: password
   });

        response.json({
        status: "success",
        uId: newJSUser.id,
      });
        
    } catch (error) {

         response.json({
        status: "Failure",
        message: error.message,
         });
        
    }

  
}

const loginJSUser = async (request, response) => 
{

    const { email, password } = request.body;

    try {
        const jsUserLogin = await JSUser.findOne({ email: email})

        response.json({
            status: "success",
            uId: jsUserLogin.id,
        });
        
    } catch (error) {
  
        response.json({
            status: "Failure",
            message: error.message,
        });
    }


}

module.exports = {
    registerJSUser,loginJSUser
}