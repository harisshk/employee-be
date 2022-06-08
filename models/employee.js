//Import Module's
const mongoose = require("mongoose");
const employeeScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        department: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"]
        },
        age: {
            type: Number,
            required: true
        },
    },
    { timestamps: true },
);

// Export the Schema with the name Employee.
module.exports = mongoose.model("", employeeScheme);
