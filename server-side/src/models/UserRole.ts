export class UserRole {
    userRoleId: number;
    userRole: string;

/**
 *  Static function for creating a UserRole instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface UserRoleRow and uses that to 
 * create an instance of UserRole.
 */

static from(obj: UserRoleRow): UserRole {
    const userRole = new UserRole(
        obj.user_role_id,
        obj.user_role
    );
    return userRole;
}

    constructor( userRoleId: number, userRole: string) {
        this.userRoleId = userRoleId;
        this.userRole = userRole;
    }
}

export interface UserRoleRow {
    user_role_id: number;
    user_role: string;
}

