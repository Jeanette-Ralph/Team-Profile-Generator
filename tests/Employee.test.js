const Employee = require('../lib/Employee');
const employee = new Employee('Katrina Kaur', '103566412', 'katrina.kaur@gmail.com');

describe('Employee', () => {
    test('the constructor should return employee name, id, and email', () => {
        expect(employee.name).toBe('Katrina Kaur');
        expect(employee.id).toBe('103566412');
        expect(employee.email).toBe('katrina.kaur@gmail.com');
    })

    test('the getName() should return the employee name', () => {
        expect(employee.getName()).toBe('Katrina Kaur');
    })

    test('the getId() should return the employee id', () => {
        expect(employee.getId()).toBe('103566412');
    })

    test('the getEmail() should return the employee email', () => {
        expect(employee.getEmail()).toBe('katrina.kaur@gmail.com');
    })

    test('the getRole() should return the Employee role', () => {
        expect(employee.getRole()).toBe('Employee');
    })

});