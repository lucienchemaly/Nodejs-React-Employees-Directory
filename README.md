
# Employee Directory Application - Reactjs, NodeJs 






## Backend NodeJs 
This project was built using the nodejs-starter seed project.
[Nodejs Starter](https://appseed.us/boilerplate-code/nodejs-starter)
<br />
![Open-Source Nodejs Starter - Product cover image.](https://github.com/app-generator/static/blob/master/products/boilerplate-code-nodejs-starter-cover.jpg?raw=true) 

<br />

## API

### Get Employees List : `api/employees`
```
Get api/employees
Host: localhost:3001
Content-Type: application/json
```

### Add Employee : `api/employees`
```
POST api/employees
Host: localhost:3001
Content-Type: application/json

{
    "firstName": "Lucien",
    "lastName": "Leannon",
    "email": "Arden_Legros@gmail.com",
    "phoneNumber": "(526) 121-4834 x60866",
    "jobTitle": "Chief Group Designer"
}
```

### Update Employee: `/api/employee`
```
POST api/employees
Host: localhost:3001
Content-Type: application/json

{
    "id": "53e929ba-df9f-4f2e-a2e5-5b6166d22be3", 
    "firstName": "Lucien",
    "lastName": "Leannon",
    "email": "Arden_Legros@gmail.com",
    "phoneNumber": "(526) 121-4834 x60866",
    "jobTitle": "Chief Group Designer"
}
```

### Delete Employee: `/api/employee`
```
DELETE api/employees
Host: localhost:3001
Content-Type: application/json

{
    "id": "53e929ba-df9f-4f2e-a2e5-5b6166d22be3"
}
```



<br />

## Setting up for development
* clone repo: `git clone https://github.com/app-generator/nodejs-starter.git` 
* change directory to nodejs-starter: 
* create a file named .env which should contain the following default setup:
```
SALT=35kj7waj3k5kja09jeoi21kn0pg13iuhlkn // used in password hashing
JWT_SECRET=secret        // used in JWT signing
SESSION_SECRET=secret    // used for session data
PORT=3000                // the port on which your server will be available on
SERVER_ADDRESS=127.0.0.1 // or 0.0.0.0 for all or other interface address you want to listen
```
* users are saved in file `config/users.js`

<br />

## Requirements
- [Node.js](https://nodejs.org/) >= 6.x



## Scripts
## Go to the EmployeesDirectory.API , then type the following commands
**Install Modules**
```bash
$ npm i
```
<br />
**Run**
```bash
$ npx sequelize db:migrate #data migration
$ npx sequelize db:seed:all #mock data to play with
$ npm start # classic start OR 
```

# Employee Directory UI
   This project was built using reactjs, devexpress, redux and sagas.
<br />

<br />

## Scripts
## Go to the EmployeesDirectory.UI , then type the following commands
**Install Modules**
```bash
$ npm i
$ npm start build-dev #run the react ui server with eslint enabled
```
<br>