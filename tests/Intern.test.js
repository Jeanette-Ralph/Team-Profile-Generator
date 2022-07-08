const Intern = require('../lib/Intern');
const intern = new Intern('Frank King', '102331567', 'frankking@live.com', 'UCLA')

describe('Intern', () => {
    test('the constructor should return Intern name, id, email, and school', () => {
        expect(intern.name).toBe('Frank King');
        expect(intern.id).toBe('102331567');
        expect(intern.email).toBe('frankking@live.com');
        expect(intern.school).toBe('UCLA');
    })

    test('the getSchool() should return the school name', () => {
        expect(intern.getSchool()).toBe('UCLA');
    })

    test('the getRole() should return the school name', () => {
        expect(intern.getRole()).toBe('Intern');
    })

})