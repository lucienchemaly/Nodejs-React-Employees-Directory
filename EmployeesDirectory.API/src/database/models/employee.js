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
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		dob: {
			type: DataTypes.STRING,
			allowNull: true
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
		jobTitle: {
			type: DataTypes.STRING,
			allowNull: true
		},
		department: {
			type: DataTypes.STRING,
			allowNull: true
		  },
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: true
		},
		prefix:{
			type: DataTypes.STRING,
			allowNull: true
		},
		createdAt: {
			allowNull: true,
			type: DataTypes.DATE
		  },
		updatedAt: {
			allowNull: true,
			type: DataTypes.DATE
		},
	});   
	return Employee;
};
