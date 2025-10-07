const ResponseHandler = require("../resource/responseHandler");

const errorHandler = (err, req, res, next) => {
    console.error(err);
    ResponseHandler.sendFailure(res, 400, { message: err.message });
}

module.exports = errorHandler;