import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
export const usersUrl = 'http://localhost:5000';

export const validateUser = async (user) => {
    // id = id || '';
    // return await axios.get(`${usersUrl}/${id}`);
    return await axios.post(`${usersUrl}/api/user/validate`, user)
}

export const signUp = async (user) => {
    
    return await axios.post(`${usersUrl}/api/user/register`, user);
}

export const getAllJobs = async () => {
    
    return await axios.get(`${usersUrl}/api/user/alljobs`);
}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }