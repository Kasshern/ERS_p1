import { internalAxios } from './internal-axios'
import { LoginCredentials } from '../models/LoginCredentials';


export const CheckLoginCredentials = async (loginCredentials: LoginCredentials) => {
    const response = await internalAxios.post('/employee/login', loginCredentials);
    return response;
}
