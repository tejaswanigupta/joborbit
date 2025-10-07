
function checkApiKey(req, res, next) {
    const apiKey = req.header("api-key");
    const validApiKey = process.env.API_KEY;
    
    if (apiKey !== validApiKey) {
        return res.status(401).json({message: "Invalid Api Key"}) 
    }
    next();
}


module.exports = checkApiKey;