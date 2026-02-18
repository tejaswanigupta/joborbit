const mongoose = require("mongoose");

const JSUserdetailSchema = mongoose.Schema(
  {
    uId: {
            type: String,
         required: [true, "please add your User Id"],
        },
        firstName: {
            type: String,
            required: [true, "please add your first Name"],
        },
          lastName: {
            type: String,
            required: [true, "Please add your last Name"]
        },
          city: {
            type: String,
            required: [true, "Please add name of your city"]
        },
          field: {
            type: String,
            required: [true, "Please add the field you want your job"]
        },
          education: {
            type: String,
            required: [true, "Please add your education background"]
        },
          experienceType: {
            type: String,
            required: [true, "Please mention your experience field"]
        },
          experienceYears: {
            type: String,
            required: [true, "Please mention your experience year"]
        },
          description: {
            type: String,
            required: [true, "Please add the required description"]
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("JSUserDetail", JSUserdetailSchema);
