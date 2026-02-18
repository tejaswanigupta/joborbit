
const mongoose = require("mongoose");

const JSCompanyDetailSchema = mongoose.Schema(
    {
        companyId: {
            type: String,
            required: [true, "please add your company Id"],
        },
        name: {
            type: String,
            required: [true, "please add your company name"],
        },
        address: {
            type: String,
            required: [true, "please add your company address"],
        },
        size: {
            type: String,
            required: [true, "please add your company size"],
        },
        type: {
            type: String,
            required: [true, "please add your company type"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("JSCompanyDetail", JSCompanyDetailSchema);