import express from 'express';
import * as employeeService from '../services/employee.service';
import { Reimbursement } from '../models/Reimbursement';
import { LoginCredentials } from '../models/LoginCredentials';
import bcrypt from 'bcrypt';


export const employeeRouter = express.Router();

// Retrieves an Array of all past reimbursement tickets
employeeRouter.get('', async (request, response, next) => {
    let reimbursements: Reimbursement[];

    try {
        reimbursements = await employeeService.getAllReimbursements();
        response.json(reimbursements);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});

// Retrieves an array of all past reimbursement ticket by employee ID
employeeRouter.get('/:id/reimbursement', async (request, response, next) => {
    const id: number = parseInt(request.params.id);
    let reimbursementRequests: Reimbursement[];

    try {
        reimbursementRequests = await employeeService.getReimbursementById(id);
    } catch (err) {
        response.sendStatus(500);
        return;
    }

    if (!reimbursementRequests) {
        response.sendStatus(404);
    } else {
        response.json(reimbursementRequests);
    }
    next();
});

// Route for adding/saving a new reimbursement request 
employeeRouter.post('/reimbursement', async (request, response, next) => {
    const reimbursement = request.body;
    let newReimbursement: Reimbursement;

    try {
        newReimbursement = await employeeService.saveReimbursement(reimbursement);
        response.status(201);
        response.json(newReimbursement);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }
    next();
});

// ! fetch user drom DB all the way to here and compare here, also do a check that user exists. 
// Route for adding/saving a new reimbursement request 
employeeRouter.post('/login', async (request, response, next) => {
    const loginCredentials = request.body;
    let LoginCredentialsResponse: LoginCredentials;

    try {
        LoginCredentialsResponse = await employeeService.checkLoginCredentials(loginCredentials);
    } catch (err) {
        console.log(err);
        response.sendStatus(500);
        return;
    }

    if (!LoginCredentialsResponse) {
        response.sendStatus(404);
    } else {

        const match = await bcrypt.compare(loginCredentials.userPassword, LoginCredentialsResponse.userPassword);

        if (!match) {
            response.sendStatus(401);
            // response.redirect('/');
        } else {
            response.json(LoginCredentialsResponse);
            response.status(201);
            // repsonse.redirect('/');
        }
    }
    next();
});
