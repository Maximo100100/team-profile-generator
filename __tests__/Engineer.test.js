const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'github.com');
  
    expect(engineer.getName()).toEqual('Dave');
    expect(engineer.getId()).toEqual(1);
    expect(engineer.getEmail()).toEqual('dave@gmail.com');
    expect(engineer.getGithub()).toEqual('github.com');
    expect(engineer.getRole()).toEqual('Engineer');
});