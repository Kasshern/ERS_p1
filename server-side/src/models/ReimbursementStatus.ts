export class ReimbursementStatus {
    reimbStatusId: number;
    reimbId: number;

/**
 *  Static function for creating a ReimbursementStatus instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface ReimbursementStatusRow and uses that to 
 * create an instance of ReimbursementStatus.
 */

static from(obj: ReimbursementStatusRow): ReimbursementStatus {
    const reimbursementStatus = new ReimbursementStatus(
        obj.reimb_status_id,
        obj.reimb_id
    );
    return reimbursementStatus;
}

    constructor( reimbStatusId: number, reimbId: number) {
        this.reimbStatusId = reimbStatusId;
        this.reimbId = reimbId;
    }
}

export interface ReimbursementStatusRow {
    reimb_status_id: number;
    reimb_id: number;
}
