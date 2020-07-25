const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');
  
    expect(employee.getName()).toEqual('Dave');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual('dave@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});