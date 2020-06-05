import * as financeManagerService from '../../src/services/financeManager.service';
import * as financeManagerDao from '../../src/daos/financeManager.dao';
import { User } from '../../src/models/User';


jest.mock('../../src/daos/financeManager.dao');

const mockFinanceManagerDao = financeManagerDao as any;

describe('saveFinanceManager', () => {
    test('422 returned if no firstName provided', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.saveFinanceManager
            .mockImplementation(() => ({}));

        const payload = {
            lastName: 'Chase',
            birthdate: '2020-01-01'
        }

        try {
            await financeManagerService.saveFinanceManager(payload);
            fail('financeManagerService.saveFinanceManager did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('422 returned if no birthdate is provided', async () => {
        expect.assertions(1);
        mockFinanceManagerDao.saveFinanceManager
        .mockImplementation(() => ({}));

        const payload = {
            lastName: 'Smith',
            firstName: 'John'
        }

        try {
            await financeManagerService.saveFinanceManager(payload);
            fail('financeManagerService.saveFinanceManager did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('422 returned if no lastName provided', async () => {
        expect.assertions(1);
        mockFinanceManagerDao.saveFinanceManager
            .mockImplementation(() => ({}));

        const payload = {
            firstName: 'John',
            birthdate: '2020-01-01'
        }

        try {
            await financeManagerService.saveFinanceManager(payload);
            fail('financeManagerService.saveFinanceManager did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('Input object transformed to User object', async () => {
        expect.assertions(2);

        mockFinanceManagerDao.saveFinanceManager
            .mockImplementation(o => o);

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01'
        };

        const result = await financeManagerService.saveFinanceManager(payload);

        expect(payload).not.toBeInstanceOf(User);
        expect(result).toBeInstanceOf(User);
    });

    test('ID value of input is replaced in output', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.saveFinanceManager
            .mockImplementation(o => o);

        const payload = {
            id: 15,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01'
        };

        const result = await financeManagerService.saveFinanceManager(payload);
        expect(result.id).not.toBe(payload.id);
    });

    test('Extraneous fields in input are not in output', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.saveFinanceManager
            .mockImplementation(o => o);

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01',
            likesSkateboards: true
        };

        const result = await financeManagerService.saveFinanceManager(payload) as any;

        expect(result.likesSkateboards).not.toBeDefined();
    });
});


describe('patchFinanceManager', () => {
    /*
        1. When a valid patch with an id property is provied, patch succeeds
            returning a truthy object.
        2. When a patch with no id property is provided, an error should be thrown.
    */

    test('successful patch', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.patchFinanceManager
            .mockImplementation(() => ({}));

        const payload = {
            id: 1,
            firstName: 'Abby',
            lastName: 'Adams',
            birthdate: '2020-01-01'
        };

        const result = await financeManagerService.patchFinanceManager(payload);
        expect(result).toBeTruthy();
    });

    test('patch fails when no valid id is provided', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.patchFinanceManager
            .mockImplementation(() => ({}));

        const payload = {
            firstName: 'Abby',
            lastName: 'Adams',
            birthdate: '2020-01-01'
        };

        try {
            await financeManagerService.patchFinanceManager(payload);
            fail();
        } catch(err) {
            expect(err).toBeTruthy();
        }
    });
});

describe('getAllFinanceManagers', () => {
    test('succesful get of all financeManagers', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.getAllFinanceManagers
            .mockImplementation(() => ({}));


        const result = await financeManagerService.getAllFinanceManagers();
            expect(result).toBeDefined();
        });
    });

describe('getFinanceManagerById', () => {
    test('succesful get a financeManager by ID', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.getFinanceManagerById
            .mockImplementation(() => ({}));

        const id: number = 100;

        const result = await financeManagerService.getFinanceManagerById(id);
            expect(result).toBeDefined();
        });

});

/*
describe('getBatchesByFinanceManagerId', () => {
    test('succesful get of all financeManagers', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.getAllFinanceManagers
            .mockImplementation(() => ({}));


        const result = await financeManagerService.getAllFinanceManagers();
            expect(result).toBeDefined();
        });
    });

    
describe('getProjectsByFinanceManagerId', () => {
    test('succesful get of all financeManagers', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.getAllFinanceManagers
            .mockImplementation(() => ({}));


        const result = await financeManagerService.getAllFinanceManagers();
            expect(result).toBeDefined();
        });
    });

describe('getTeamsByFinanceManagerId', () => {
    test('succesful get of all financeManagers', async () => {
        expect.assertions(1);

        mockFinanceManagerDao.getAllFinanceManagers
            .mockImplementation(() => ({}));


        const result = await financeManagerService.getAllFinanceManagers();
            expect(result).toBeDefined();
        });
    });
*/