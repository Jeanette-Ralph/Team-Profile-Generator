const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jeanette Ralph', '105557192', 'jean.ralph@hotmail.com', 'Jeanette-Ralph', 'https://github.com/Jeanette-Ralph');

describe('Engineer', () => {
    test('the constructor should return the name, id, email, and gh username of the engineer', () => {
        expect(engineer.name).toBe('Jeanette Ralph');
        expect(engineer.id).toBe('105557192');
        expect(engineer.email).toBe('jean.ralph@hotmail.com');
        expect(engineer.gitHub).toBe('Jeanette-Ralph');
        expect(engineer.gitHubLink).toBe('https://github.com/Jeanette-Ralph');
    })

    test('the getGitHub() should return gh username of the engineer', () => {
        expect(engineer.getGitHub()).toBe('Jeanette-Ralph');
    })

    test('the getRole() should return the role of the engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    })

})