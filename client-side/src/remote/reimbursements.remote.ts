import { internalAxios } from './internal-axios'
import { Reimbursement } from '../models/Reimbursement';


export const getAllReimbursements = async () => {
    const response = await internalAxios.get<Reimbursement[]>('/employee');
    return response.data.map(reimbursement => {
        // Replace string birthdate with Date object
        reimbursement.reimbSubmitted = new Date(reimbursement.reimbSubmitted);
        return reimbursement;
    });
}

export const createReimbursement = async (reimbursement: Reimbursement) => {
    const response = await internalAxios.post('/employee/reimbursement', reimbursement);
    return true;
}
