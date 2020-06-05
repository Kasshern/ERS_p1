import { Reimbursement } from '../models/Reimbursement';
import * as financeManagerDao from '../daos/financeManager.dao';
import { ReimbursementStatus } from '../models/ReimbursementStatus';


export function getAllReimbursements(): Promise<Reimbursement[]> {
    return financeManagerDao.getAllReimbursements();
}

export function getAllReimbursementsByStatus(status: string): Promise<Reimbursement[]> {
    return financeManagerDao.getAllReimbursementsByStatus(status);
}

export function getAllReimbursementsSorted(sortValue: string): Promise<Reimbursement[]> {
    return financeManagerDao.getAllReimbursementsByStatus(sortValue);
}

export function patchReimbursementStatus(input: any): Promise<ReimbursementStatus> {

    const reimbursementStatus = new ReimbursementStatus(
        input.reimbStatusId,
        input.reimbStatus
    );

    // Check that new trainer is a valid id
    if (!reimbursementStatus.reimbStatusId) {
        throw new Error ('400');
    }

    return financeManagerDao.patchReimbursementStatus(reimbursementStatus);
    }