import * as employeeService from '../../src/services/employee.service';
import * as employeeDao from '../../src/daos/employee.dao';
import { User } from '../../src/models/User';


jest.mock('../../src/daos/employee.dao');

const mockEmployeeDao = employeeDao as any;

describe('saveEmployee', () => {
    test('422 returned if no firstName provided', async () => {
        expect.assertions(1);

        mockEmployeeDao.saveEmployee
            .mockImplementation(() => ({}));

        const payload = {
            lastName: 'Chase',
            birthdate: '2020-01-01'
        }

        try {
            await employeeService.saveEmployee(payload);
            fail('employeeService.saveEmployee did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('422 returned if no birthdate is provided', async () => {
        expect.assertions(1);
        mockEmployeeDao.saveEmployee
        .mockImplementation(() => ({}));

        const payload = {
            lastName: 'Smith',
            firstName: 'John'
        }

        try {
            await employeeService.saveEmployee(payload);
            fail('employeeService.saveEmployee did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('422 returned if no lastName provided', async () => {
        expect.assertions(1);
        mockEmployeeDao.saveEmployee
            .mockImplementation(() => ({}));

        const payload = {
            firstName: 'John',
            birthdate: '2020-01-01'
        }

        try {
            await employeeService.saveEmployee(payload);
            fail('employeeService.saveEmployee did not throw expected error');
        } catch(err) {
            expect(err).toBeDefined();
        }
    });

    test('Input object transformed to User object', async () => {
        expect.assertions(2);

        mockEmployeeDao.saveEmployee
            .mockImplementation(o => o);

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01'
        };

        const result = await employeeService.saveEmployee(payload);

        expect(payload).not.toBeInstanceOf(User);
        expect(result).toBeInstanceOf(User);
    });

    test('ID value of input is replaced in output', async () => {
        expect.assertions(1);

        mockEmployeeDao.saveEmployee
            .mockImplementation(o => o);

        const payload = {
            id: 15,
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01'
        };

        const result = await employeeService.saveEmployee(payload);
        expect(result.id).not.toBe(payload.id);
    });

    test('Extraneous fields in input are not in output', async () => {
        expect.assertions(1);

        mockEmployeeDao.saveEmployee
            .mockImplementation(o => o);

        const payload = {
            firstName: 'John',
            lastName: 'Smith',
            birthdate: '2000-01-01',
            likesSkateboards: true
        };

        const result = await employeeService.saveEmployee(payload) as any;

        expect(result.likesSkateboards).not.toBeDefined();
    });
});


describe('patchEmployee', () => {
    /*
        1. When a valid patch with an id property is provied, patch succeeds
            returning a truthy object.
        2. When a patch with no id property is provided, an error should be thrown.
    */

    test('successful patch', async () => {
        expect.assertions(1);

        mockEmployeeDao.patchEmployee
            .mockImplementation(() => ({}));

        const payload = {
            id: 1,
            firstName: 'Abby',
            lastName: 'Adams',
            birthdate: '2020-01-01'
        };

        const result = await employeeService.patchEmployee(payload);
        expect(result).toBeTruthy();
    });

    test('patch fails when no valid id is provided', async () => {
        expect.assertions(1);

        mockEmployeeDao.patchEmployee
            .mockImplementation(() => ({}));

        const payload = {
            firstName: 'Abby',
            lastName: 'Adams',
            birthdate: '2020-01-01'
        };

        try {
            await employeeService.patchEmployee(payload);
            fail();
        } catch(err) {
            expect(err).toBeTruthy();
        }
    });
});

describe('getAllEmployees', () => {
    test('succesful get of all employees', async () => {
        expect.assertions(1);

        mockEmployeeDao.getAllEmployees
            .mockImplementation(() => ({}));


        const result = await employeeService.getAllEmployees();
            expect(result).toBeDefined();
        });
    });

describe('getEmployeeById', () => {
    test('succesful get a employee by ID', async () => {
        expect.assertions(1);

        mockEmployeeDao.getEmployeeById
            .mockImplementation(() => ({}));

        const id: number = 100;

        const result = await employeeService.getEmployeeById(id);
            expect(result).toBeDefined();
        });

});

/*
describe('getBatchesByEmployeeId', () => {
    test('succesful get of all employees', async () => {
        expect.assertions(1);

        mockEmployeeDao.getAllEmployees
            .mockImplementation(() => ({}));


        const result = await employeeService.getAllEmployees();
            expect(result).toBeDefined();
        });
    });

    
describe('getProjectsByEmployeeId', () => {
    test('succesful get of all employees', async () => {
        expect.assertions(1);

        mockEmployeeDao.getAllEmployees
            .mockImplementation(() => ({}));


        const result = await employeeService.getAllEmployees();
            expect(result).toBeDefined();
        });
    });

describe('getTeamsByEmployeeId', () => {
    test('succesful get of all employees', async () => {
        expect.assertions(1);

        mockEmployeeDao.getAllEmployees
            .mockImplementation(() => ({}));


        const result = await employeeService.getAllEmployees();
            expect(result).toBeDefined();
        });
    });
*/