const mongoose  = require("mongoose");

const CompanyAuthSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please add your company's email"],
            unique: [true, "email address already exist"]
        },
        password: {
            type: String,
            required: [true, "Please add your password"]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Company_User", CompanyAuthSchema);