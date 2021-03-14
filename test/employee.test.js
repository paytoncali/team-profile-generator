const { expect, test } = require('@jest/globals');
const Employee = require('../lib/employee');


describe ("Employee", () => {
    describe("Initialization", () => {
        it("returns object with name, id, and email", () => {
            const objectEmployee = new Employee();

            expect("name" in objectEmployee).toEqual(true);
            expect("id" in objectEmployee).toEqual(true);
            expect("email" in objectEmployee).toEqual(true);
        });
    });

});

test("can add name, id, and email with contructor", () => {
    const name = "Payton";
    const id = 555;
    const email = "payton@gmail.com";
    const employee = new Employee("Payton", 555, "payton@gmail.com");

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
});

test('getName function works', () => {
    const employee = new Employee("Payton", 555, "payton@gmail.com");

    expect(employee.getName()).toBe("Payton");
});

test('getId function works', () => {
    const employee = new Employee("Payton", 555, "payton@gmail.com");

    expect(employee.getId()).toBe(555);
});

test('getEmail function works', () => {
    const employee = new Employee("Payton", 555, "payton@gmail.com");

    expect(employee.getEmail()).toBe("payton@gmail.com");
});

test('getRole function works', () => {
    const employee = new Employee("Payton", 555, "payton@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});

