const Manager = require('../lib/Manager');
const manager = new Manager('James Smith', '101301598', 'james.smith@gmail.com', '213')

describe('Manager', () => {
    test('the constructor should return Manager name, id, email, and office number', () => {
        expect(manager.name).toBe('James Smith');
        expect(manager.id).toBe('101301598');
        expect(manager.email).toBe('james.smith@gmail.com');
        expect(manager.officeNumber).toBe('213');
    })

    test('the getRole() should return the role', () => {
        expect(manager.getRole()).toBe('Manager');
    })

})