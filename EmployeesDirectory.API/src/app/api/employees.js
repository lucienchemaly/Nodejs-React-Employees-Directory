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
    firstName: Joi.string().alphanum().min(3).max(30).optional(),
    lastName: Joi.string().alphanum().min(3).max(30).optional(),
	email: Joi.string().email({ minDomainAtoms: 2 }).required(),
	name: Joi.string().alphanum().min(2).max(100).optional(),
    dob: Joi.string().alphanum().min(2).max(10).optional(),
    jobTitle: Joi.string().alphanum().min(3).max(30).optional(),
    prefix: Joi.string().alphanum().min(1).max(5).optional(),
});

/* GET list route */
router.get('/list', (req, res, next) => {

	Employee.findAll().then(employees => {

		return res.status(200).json( employees );
	})

});


module.exports = router;
