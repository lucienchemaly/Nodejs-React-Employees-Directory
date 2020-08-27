/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const uuid = require('uuid/v4');
'use strict';
module.exports = (sequelize, DataTypes) => {
	let Employee = sequelize.define('Employee', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: () => uuid()
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		dob: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phoneNumber: {
		type: DataTypes.STRING,
		allowNull: true
		},
		jobTitle: {
		type: DataTypes.STRING,
		allowNull: true
		},
		prefix:{
			type: DataTypes.STRING,
		},
	});   
	return Employee;
};
