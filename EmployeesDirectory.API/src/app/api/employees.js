/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const Joi         = require('joi');
const passport    = require('passport');
const router      = require('express').Router();
const auth        = require('../routes/auth');
const generateJWT = require('../utils/generateJWT');
const Employee        = require('../../database/models').Employee;

const employeeSchema = Joi.object().keys({
    id:Joi.string().optional(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
	email: Joi.string().required(),
    dob: Joi.string().optional(),
    jobTitle:  Joi.string().optional(),
    phoneNumber:  Joi.string().optional(),
    department:  Joi.string().optional(),
    imageUrl:  Joi.string().optional(),
    prefix:  Joi.string().optional(),
    createdAt:  Joi.string().optional(),
    updatedAt:  Joi.string().optional(),
});
const idSchema = Joi.object().keys({
    id:Joi.string(),
});


/**
 * Get Employees List
*/
router.get('/', (req, res, next) => {
	Employee.findAll().then(employees => {
		return res.status(200).json( employees );
	})
});

/**
 * Add new Employee
 * Return : Object of type employee
 */
router.post('/',  async (req, res ) => {
    const { body: { employee } } = req; 
	const result = Joi.validate(employee, employeeSchema);
	if(result.error){
		return res.status(422).json({
            errors: result.error
		});
    }
    try{
        const employee = await Employee.create(req.body);
        return res.json({ employee });
    }catch(e){
        return res.status(500).json({
            errors: e
		});
    }
});

/**
 * Update Employee
 * Return : Id (string)
 */
router.put('/',  async (req, res ) => {
    const { body: { employee } } = req; 
	const result = Joi.validate(employee, employeeSchema);
	if(result.error){
		return res.status(422).json({
            errors: result.error
		});
    }
    try{
        await Employee.update(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                jobTitle: req.body.jobTitle,
                honeNumber: req.body.phoneNumber,
                department: req.body.department
            },
            {returning: true, where: {id: req.body.id} }
        );
        return res.json({ id: req.body.id });
    }catch(e){
        return res.status(500).json({
            errors: e
		});
    }
});

/**
 * Delete Employee
 * Return : Id (string)
 */
router.delete('/',  async (req, res ) => {
    try{
        await Employee.destroy(
            {returning: true, where: {id: req.body.id} }
        );

        return res.json({ id: req.body.id });
    }catch(e){
        return res.status(500).json({
            errors: e
		});
    }
});

module.exports = router;
