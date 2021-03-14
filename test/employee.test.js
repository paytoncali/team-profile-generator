const Employee = require('../lib/employee');

describe ("Employee", () => {
    describe("Initialization", () => {
        it("returns object with name, id, and email", () => {
            const objectEmployee = new Employee();

            expect("name").toEqual(true);
            expect("id").toEqual(true);
            expect("email").toEqual(true);
        });

        it("name is working", () => {
            const name = "payton";
            expect(Employee.name).toBe(name);
        
        });

        it("id is working", () => {
            const id = "555";
            expect(Employee.id).toBe(id);
        });

        it("email is working", () => {
            const email = "paytoncaliw@gmail.com";
            expect(Employee.email).toBe(email);
        })
    })
});




