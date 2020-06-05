export class LoginCredentials {
    userName: string;
    userPassword: string;

/**
 *  Static function for creating a UserRole instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface UserRoleRow and uses that to 
 * create an instance of UserRole.
 */

static from(obj: LoginCredentialsRow): LoginCredentials {
    const loginCredentials = new LoginCredentials(
        obj.ers_username,
        obj.ers_password
    );
    return loginCredentials;
}

    constructor( userName: string, userPassword: string) {
        this.userName = userName;
        this.userPassword = userPassword;
    }
}

export interface LoginCredentialsRow {
    ers_username: string;
    ers_password: string;
}