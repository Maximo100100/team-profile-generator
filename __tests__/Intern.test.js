const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'School');
  
    expect(intern.getName()).toEqual('Dave');
    expect(intern.getId()).toEqual(1);
    expect(intern.getEmail()).toEqual('dave@gmail.com');
    expect(intern.getSchool()).toEqual('School');
    expect(intern.getRole()).toEqual('Intern');
});