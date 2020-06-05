export class LoginCredentials {
    username: string;
    userPassword: string;
    userRole: string;

/**
 *  Static function for creating a UserRole instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface UserRoleRow and uses that to 
 * create an instance of UserRole.
 */

static from(obj: LoginCredentialsRow): LoginCredentials {
    const loginCredentials = new LoginCredentials(
        obj.ers_username,
        obj.ers_password,
        obj.user_role
    );
    return loginCredentials;
}

    constructor( username: string, userPassword: string, userRole: string) {
        this.username = username;
        this.userPassword = userPassword;
        this.userRole = userRole;
    }
}

export interface LoginCredentialsRow {
    ers_username: string;
    ers_password: string;
    user_role: string;
}