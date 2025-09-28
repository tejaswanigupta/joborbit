
const mongoose = require ("mongoose");
const JSUserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "please add your email"],
        },
          password: {
            type: String,
            required: [true, "Please add the password"]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("JSUser", JSUserSchema);
