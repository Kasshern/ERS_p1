//! Change this model to accomodate for the status data as well, or create new model??
export class Reimbursement {
    reimbId: number;
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;
    reimbAuthor:number;
    reimbResolver: number;
    reimbStatusId: number;
    reimbTypeId: number;
    reimbStatus: string;
    

/**
 *  Static function for creating a Reimbursement instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface ReimbursementRow and uses that to 
 * create an instance of Reimbursement.
 */

static from(obj: ReimbursementRow): Reimbursement {
    const reimbursement = new Reimbursement(
        obj.reimb_id,
        obj.reimb_amount,
        new Date(obj.reimb_submitted),
        new Date(obj.reimb_resolved),
        obj.reimb_description,
        obj.reimb_receipt,
        obj.reimb_author,
        obj.reimb_resolver,
        obj.reimb_status_id,
        obj.reimb_type_id,
        obj.reimb_status
    );
    return reimbursement;
}

    constructor(reimbId: number,
            reimbAmount: number,
            reimbSubmitted: Date,
            reimbResolved: Date,
            reimbDescription: string,
            reimbReceipt: string,
            reimbAuthor:number,
            reimbResolver: number,
            reimbStatusId: number,
            reimbTypeId: number,
            reimbStatus: string
            ) {
        this.reimbId = reimbId;
        this.reimbAmount = reimbAmount;
        this.reimbSubmitted = reimbSubmitted;
        this.reimbResolved = reimbResolved;
        this.reimbDescription = reimbDescription;
        this.reimbReceipt = reimbReceipt;
        this.reimbAuthor = reimbAuthor;
        this.reimbResolver = reimbResolver;
        this.reimbStatusId = reimbStatusId;
        this.reimbTypeId = reimbTypeId;
        this.reimbStatus = reimbStatus;
    }
}

export interface ReimbursementRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_submitted: Date;
    reimb_resolved: Date;
    reimb_description: string;
    reimb_receipt: string;
    reimb_author:number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number
    reimb_status: string;
}

/*
//! Change this model to accomodate for the status data as well, or create new model??
export class Reimbursement {
    reimbAmount: number;
    reimbSubmitted: Date;
    reimbResolved: Date;
    reimbDescription: string;
    reimbReceipt: string;



static from(obj: ReimbursementRow): Reimbursement {
    const reimbursement = new Reimbursement(
        obj.reimb_amount,
        new Date(obj.reimb_submitted),
        new Date(obj.reimb_resolved),
        obj.reimb_description,
        obj.reimb_receipt
    );
    return reimbursement;
}

    constructor(
            reimbAmount: number,
            reimbSubmitted: Date,
            reimbResolved: Date,
            reimbDescription: string,
            reimbReceipt: string
            ) {
        this.reimbAmount = reimbAmount;
        this.reimbSubmitted = reimbSubmitted;
        this.reimbResolved = reimbResolved;
        this.reimbDescription = reimbDescription;
        this.reimbReceipt = reimbReceipt;
    }
}

export interface ReimbursementRow {
    reimb_amount: number;
    reimb_submitted: Date;
    reimb_resolved: Date;
    reimb_description: string;
    reimb_receipt: string;
}


*/