export class ReimbursementType {
    reimbTypeId: number;
    reimbType: string;

/**
 *  Static function for creating a ReimbursementType instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface ReimbursementTypeRow and uses that to 
 * create an instance of ReimbursementType.
 */

static from(obj: ReimbursementTypeRow): ReimbursementType {
    const reimbursementType = new ReimbursementType(
       obj.reimb_type_id,
        obj.reimb_type
    );
    return reimbursementType;
}

    constructor( reimbTypeId: number, reimbType: string) {
       this.reimbTypeId = reimbTypeId;
        this.reimbType = reimbType;
    }
}

export interface ReimbursementTypeRow {
    reimb_type_id: number;
    reimb_type: string;
}

