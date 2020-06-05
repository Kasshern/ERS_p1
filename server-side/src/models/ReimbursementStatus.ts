export class ReimbursementStatus {
    reimbStatusId: number;
    reimbStatus: string;

/**
 *  Static function for creating a ReimbursementStatus instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface ReimbursementStatusRow and uses that to 
 * create an instance of ReimbursementStatus.
 */

static from(obj: ReimbursementStatusRow): ReimbursementStatus {
    const reimbursementStatus = new ReimbursementStatus(
        obj.reimb_status_id,
        obj.reimb_status
    );
    return reimbursementStatus;
}

    constructor( reimbStatusId: number, reimbStatus: string) {
        this.reimbStatusId = reimbStatusId;
        this.reimbStatus = reimbStatus;
    }
}

export interface ReimbursementStatusRow {
    reimb_status_id: number;
    reimb_status: string;
}
