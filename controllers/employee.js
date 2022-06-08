const { StatusCodes } = require("http-status-codes");
const Employee = require('../models/employee');

const createEmployee = async (req, res) => {
    try {
        let preData = await Employee.findOne({ email: req.body.email })
        if (preData) {
            return res.status(StatusCodes.CONFLICT).json({
                success: true,
                duplicate: true,
                message: "DUPLICATE_DATA",
            });
        }
        const newEmployeeData = await new Employee(req?.body).save();
        res.status(StatusCodes.CREATED).json(({
            success: true,
            data: newEmployeeData
        }))

    } catch (error) {
        console.log(err)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error in creating the Employee",
            success: false,
            err: error.message,
        });
    }
}

const editEmployeeData = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEmployeeData = await Employee.findOneAndUpdate(
            { _id: id },
            { $set: req.body }
        );

        res.status(StatusCodes.OK).json(({
            success: true,
            data: updatedEmployeeData
        }))

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error in updating the Employee",
            success: false,
            err: error.message,
        });
    }
}

const getEmployeeData = async (req, res) => {
    try {
        const { id } = req.params;
        const employeeData = await Employee.findOne({ _id: id });

        res.status(StatusCodes.OK).json(({
            success: true,
            data: employeeData
        }))

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error in getting the Employee Data",
            success: false,
            err: error.message,
        });
    }
}

const getAllEmployees = async (req, res) => {
    try {
        const employeeData = await Employee.find({ isDeleted: false });

        res.status(StatusCodes.OK).json(({
            success: true,
            data: employeeData
        }))

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error in getting the Employee Data",
            success: false,
            err: error.message,
        });
    }
}


const deleteEmployeeData = async (req, res) => {
    try {
        const { id } = req.params;
        const employeeData = await Employee.findByIdAndDelete({ _id: id });

        res.status(StatusCodes.OK).json(({
            success: true,
            data: employeeData
        }))

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error in getting the Employee Data",
            success: false,
            err: error.message,
        });
    }
}

module.exports = { createEmployee, editEmployeeData, getEmployeeData, getAllEmployees, deleteEmployeeData }