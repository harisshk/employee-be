/** Express router providing user related routes
 * @module routes/employee
 * @requires express
 */

/**
 * express module
 * @const
 * @namespace employeeRoutes
 */
var router = require("express").Router();

const {
  createEmployee,
  editEmployeeData,
  getEmployeeData,
  deleteEmployeeData,
  getAllEmployees
} = require('../controllers/employee')

/**
  * Route serving creating employee.
  * @name POST /employee/create
  * @function
  * @memberof module:routes/employee~employeeRoutes
  * @inner
  * @returns {object} 201 - Created
  * @returns {Error} 409 - Conflict Error
  * @returns {Error} 400 - Unexpected Error
  */
router.post('/create', createEmployee)

/**
  * Route serving edit employee.
  * @name PUT /employee/edit/:id
  * @function
  * @memberof module:routes/employee~employeeRoutes
  * @inner
  * @returns {object} 200 - OK
  * @returns {Error} 400 - Unexpected Error
  */

router.put('/edit/:id', editEmployeeData);

/**
  * Route serving get employee by id.
  * @name GET /employee/:id
  * @function
  * @memberof module:routes/employee~employeeRoutes
  * @inner
  * @returns {object} 200 - OK
  * @returns {Error} 400 - Unexpected Error
  */

router.get('/:id/', getEmployeeData);

/**
  * Route serving delete employee by  id.
  * @name DELETE /employee/:id
  * @function
  * @memberof module:routes/employee~employeeRoutes
  * @inner
  * @returns {object} 200 - OK
  * @returns {Error} 400 - Unexpected Error
  */


router.delete('/id', deleteEmployeeData);

/**
  * Route serving get all employee.
  * @name GET /employee
  * @function
  * @memberof module:routes/employee~employeeRoutes
  * @inner
  * @returns {object} 200 - OK
  * @returns {Error} 400 - Unexpected Error
  */


router.get('/all', getAllEmployees);

module.exports = router;