const mongoose = require("mongoose");

const JSCompanyJobSchema = mongoose.Schema(
    {
        companyId: {
            type: String,
            required: [true, "please add your company Id"],
        },
        jobTitle: {
            type: String,
            required: [true, "please add the Job Title"],
        },
        companyName: {
            type: String,
            required: [true, "please add your Company Name"],
        },
        experience: {
            type: String,
            required: [true, "please add the required experience"],
        },
        salary: {
            type: String,
            required: [true, "please add expected salary"],
        },
        city: {
            type: String,
            required: [true, "please add your city where company is located"],
        },
        jobDescription: {
            type: String,
            required: [true, "please add the job description"],
        },
        keySkills: {
            type: String,
            required: [true, "please list the key skill demanded"],
        },
        workType: {
            type: String,
            required: [true, "please add work mode of job(hybrid,remote)"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("JSCompanyJob", JSCompanyJobSchema);
