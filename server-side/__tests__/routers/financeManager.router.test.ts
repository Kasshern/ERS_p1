import express from 'express';
import bodyParser from 'body-parser';
import { financeManagerRouter } from '../../src/routers/financeManager.router';
import * as financeManagerService from '../../src/services/financeManager.service';
import request from 'supertest';

// Setup mock for financeManagerService dependency
jest.mock('../../src/services/financeManager.service');
const mockFinanceManagerService = financeManagerService as any;

// Setup Express server and middleware
const app = express();
app.use(bodyParser.json())
app.use('/financeManager', financeManagerRouter);

describe('GET /financeManager', () => {
    test('Returns normally under normal circumstances', async () => {

        mockFinanceManagerService.getAllFinanceManagers
            .mockImplementation(async () => []);
        await request(app)
            .get('/financeManager')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8');
    });

    test('Returns normally under normal circumstances', async () => {

        mockFinanceManagerService.getAllFinanceManagers
            .mockImplementation(async () => {throw new Error()});
        await request(app)
            .get('/financeManager')
            .expect(500);
    });
});

describe('GET /financeManager/:id', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.getFinanceManagerById
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/financeManager/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.getFinanceManagerById
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/financeManager/1')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.getFinanceManagerById
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/financeManager/1')
            .expect(500)
    })
})

describe('GET /financeManager/:id/batch', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.getBatchesByFinanceManagerId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/financeManager/100/batch')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.getBatchesByFinanceManagerId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/financeManager/1/batch')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.getBatchesByFinanceManagerId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/financeManager/1/batch')
            .expect(500)
    })
})

describe('GET /financeManager/:id/batch/project', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.getProjectsByFinanceManagerId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/financeManager/100/batch/project')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.getProjectsByFinanceManagerId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/financeManager/1/batch/project')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.getProjectsByFinanceManagerId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/financeManager/1/batch/project')
            .expect(500)
    })
})


describe('GET /financeManager/:id/batch/associate', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.getAssociatesByFinanceManagerId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/financeManager/100/batch/associate')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.getAssociatesByFinanceManagerId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/financeManager/1/batch/associate')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.getAssociatesByFinanceManagerId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/financeManager/1/batch/associate')
            .expect(500)
    })
})

describe('GET /financeManager/:id1/batch/project/:id2/team', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.getTeamsByFinanceManagerId
            .mockImplementation(async () => ({}));

        await request(app)
            .get('/financeManager/100/batch/project/100/team')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.getTeamsByFinanceManagerId
            .mockImplementation(async () => (undefined));

        await request(app)
            .get('/financeManager/100/batch/project/100/team')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.getTeamsByFinanceManagerId
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .get('/financeManager/100/batch/project/100/team')
            .expect(500)
    })
})

describe('POST /financeManager', () => {
    test('Successful creation should return 201 status', async () => {

        mockFinanceManagerService.saveFinanceManager
            .mockImplementation(async () => ({}));
        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .post('/financeManager')
            .send(payload)
            .expect(201)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('Should return 500 when encountering an error', async () => {

        mockFinanceManagerService.saveFinanceManager
            .mockImplementation(async () => {throw new Error()});

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .post('/financeManager')
            .send(payload)
            .expect(500);
    });
});

describe('PATCH /financeManager', () => {
    test('Successful update should return 201 status', async () => {
        mockFinanceManagerService.patchFinanceManager
            .mockImplementation(async () => ({}));

        const payload = {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .patch('/financeManager')
            .send(payload)
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.patchFinanceManager
            .mockImplementation(async () => (undefined));

        await request(app)
            .patch('/financeManager')
            .expect(404);
        });

    test('Should return 500 when encountering an error', async () => {

        mockFinanceManagerService.patchFinanceManager
            .mockImplementation(async () => {throw new Error()});

        const payload = {
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2020-01-01'
        };

        await request(app)
            .patch('/financeManager')
            .send(payload)
            .expect(500);
    });
});

describe('DELETE /financeManager/:id', () => {
    test('Normal behavior Json with status 200', async () => {
        mockFinanceManagerService.deleteFinanceManager
            .mockImplementation(async () => ({}));

        await request(app)
            .delete('/financeManager/1')
            .expect(200)
            .expect('content-type', 'application/json; charset=utf-8')
    });

    test('No object found (404)', async() => {
        mockFinanceManagerService.deleteFinanceManager
            .mockImplementation(async () => (undefined));

        await request(app)
            .delete('/financeManager/1')
            .expect(404);
    });

    test('500 internal server error', async() => {
        mockFinanceManagerService.deleteFinanceManager
            .mockImplementation(async () => {throw new Error()});

        await request(app)
            .delete('/financeManager/1')
            .expect(500)
    });
});
