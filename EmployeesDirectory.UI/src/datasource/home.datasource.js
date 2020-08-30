import axios from '../utils/axiosInstance';

export function getEmployeesList(request) {
    // let user = JSON.parse(localStorage.getItem('bearer'));
   // let token = localStorage.getItem('bearer');
    //console.log('token', token)
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
