import axios from '../utils/axiosInstance';

/**
 * Get Employees List
 */
export function getEmployeesList() {
     return axios.get("api/employees")
        .then(function (response) {
            console.log('response', response)
            return response;
        })
        .catch(function (error) {
            console.log('error', error)
            throw error;
        });
}


/**
 * Update Employee
 * @param {object} employee 
 */
export function editEmployee(employee) {
    return axios.put("api/employees", employee)
       .then(function (response) {
           console.log('response', response)
           return response;
       })
       .catch(function (error) {
           console.log('error', error)
           throw error;
       });
}

/**
 * Add New Employee
 * @param {Object} employee 
 */
export function createEmployee(employee) {
    return axios.post("api/employees", employee)
       .then(function (response) {
           console.log('response', response)
           return response;
       })
       .catch(function (error) {
           console.log('error', error)
           throw error;
       });
}

/**
 * Delete Employee
 * @param {Objt:String} id 
 */
export function removeEmployee(id) {
    console.log("form azieons delete", id);
    return axios.delete("api/employees", {
        data: {
            id: id.id
        }
    })
    .then(function (response) {
        console.log('response', response)
        return response;
    })
    .catch(function (error) {
        console.log('error', error)
        throw error;
    });
}