
const mongoose = require ("mongoose");
const JSUserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "please add your email"],
            unique: [true, "email address already exist"]
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
