/* istanbul ignore file */
import { db } from '../daos/db';
import { Reimbursement, ReimbursementRow } from '../models/Reimbursement';
import { ReimbursementStatus, ReimbursementStatusRow } from '../models/ReimbursementStatus';


/**
 * Doc Notes
 */

// ! propbably make this one auto sort by date
 // Retrieve all reimbursement request tickets and their status
export async function getAllReimbursements(): Promise<Reimbursement[]> {
    const sql = 'SELECT reimb_amount, reimb_submitted, reimb_resolved, reimb_description, reimb_receipt, \
    reimb_status FROM ers_reimbursement LEFT JOIN ers_reimbursement_status \
    ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id';

    const result = await db.query<ReimbursementRow>(sql, []);
    return result.rows.map(Reimbursement.from);
    }

// retrieve all remimbursement request tickets by status 
export async function getAllReimbursementsByStatus(status: string): Promise<Reimbursement[]> {
    const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status \
    ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
    WHERE ers_reimbursement_status.reimb_status = $1';

    const result = await db.query<ReimbursementRow>(sql, [status]);
    return result.rows.map(Reimbursement.from);
    }

// ! Fix this one to order by what value you want it to order 
// Retrieves all Reimbursment tickets and oders them by url declared column value 
export async function getAllReimbursementsSorted(sortValue: string): Promise<Reimbursement[]> {
    const sql = 'SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status ON \
                ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id \
                ORDER BY $1';

    const result = await db.query<ReimbursementRow>(sql, [sortValue]);
    return result.rows.map(Reimbursement.from);
    }

// Changes the status of a reimbursement request from pending to accepted or denied
export async function patchReimbursementStatus(reimbursementStatus: ReimbursementStatus): Promise<ReimbursementStatus> {
    const sql = `UPDATE ers_reimbursement_status SET reimb_status = COALESCE($1, reimb_status) \
                WHERE reimb_status_id = $2 RETURNING *`;

    const result = await db.query<ReimbursementStatusRow>(sql, [
        reimbursementStatus.reimbStatus,
        reimbursementStatus.reimbStatusId

    ]);
    return result.rows.map(ReimbursementStatus.from)[0];
}