import express from 'express';
import bodyParser from 'body-parser';
import { employeeRouter } from '../../src/routers/employee.router';
import * as employeeService from '../../src/services/employee.service';
import request from 'supertest';

// Setup mock for employeeService dependency
jest.mock('../../src/services/employee.service');
const mockEmployeeService = employeeService as any;

// Setup Express server and middleware
const app = express();
app.use(bodyParser.json())
app.use('/employee', employeeRouter);

describe('GET /employee', () => {
    test('Returns normally under normal circumstances', async () => {

        mockEmployeeService.getAllEmployees
            .mockImplementation(async () => []);
        await request(app)
            .get('/employee')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });

    test('Returns normally under normal circumstances', async () => {

        mockEmployeeService.getAllEmployees
            .mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/employee')
            .expect(500);
    });
});

describe('GET /employee/:id', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.getEmployeeById
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/employee/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.getEmployeeById
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/employee/1')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.getEmployeeById
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/employee/1')
            .expect(500)
    })
})

describe('GET /employee/:id/batch', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.getBatchesByEmployeeId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/employee/100/batch')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.getBatchesByEmployeeId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/employee/1/batch')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.getBatchesByEmployeeId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/employee/1/batch')
            .expect(500)
    })
})

describe('GET /employee/:id/batch/project', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.getProjectsByEmployeeId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/employee/100/batch/project')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.getProjectsByEmployeeId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/employee/1/batch/project')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.getProjectsByEmployeeId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/employee/1/batch/project')
            .expect(500)
    })
})


describe('GET /employee/:id/batch/associate', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.getAssociatesByEmployeeId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/employee/100/batch/associate')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.getAssociatesByEmployeeId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/employee/1/batch/associate')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.getAssociatesByEmployeeId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/employee/1/batch/associate')
            .expect(500)
    })
})

describe('GET /employee/:id1/batch/project/:id2/team', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.getTeamsByEmployeeId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/employee/100/batch/project/100/team')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.getTeamsByEmployeeId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/employee/100/batch/project/100/team')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.getTeamsByEmployeeId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/employee/100/batch/project/100/team')
            .expect(500)
    })
})

describe('POST /employee', () => {
    test('Successful creation should return 201 status', async () => {

        mockEmployeeService.saveEmployee
            .mockImplementation(async () => ({}));
        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .post('/employee')
            .send(payload)
            .expect(201)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('Should return 500 when encountering an error', async () => {

        mockEmployeeService.saveEmployee
            .mockImplementation(async () => {throw new Error()});

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .post('/employee')
            .send(payload)
            .expect(500);
    });
});

describe('PATCH /employee', () => {
    test('Successful update should return 201 status', async () => {
        mockEmployeeService.patchEmployee
            .mockImplementation(async () => ({}));

        const payload = {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .patch('/employee')
            .send(payload)
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.patchEmployee
            .mockImplementation(async () => (undefined));

        await request(app)
            .patch('/employee')
            .expect(404);
        });

    test('Should return 500 when encountering an error', async () => {

        mockEmployeeService.patchEmployee
            .mockImplementation(async () => {throw new Error()});

        const payload = {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .patch('/employee')
            .send(payload)
            .expect(500);
    });
});

describe('DELETE /employee/:id', () => {
    test('Normal behavior Json with status 200', async () => {
        mockEmployeeService.deleteEmployee
            .mockImplementation(async () => ({}));

        await request(app)
            .delete('/employee/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockEmployeeService.deleteEmployee
            .mockImplementation(async () => (undefined));

        await request(app)
            .delete('/employee/1')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockEmployeeService.deleteEmployee
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .delete('/employee/1')
            .expect(500)
    });
});
