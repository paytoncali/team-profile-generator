const { expect, test } = require("@jest/globals");
const Manager = require("../lib/manager");

describe ("Manager", () => {
    describe("Initialization", () => {
        it("returns object with name, id, email and officenumber", () => {
            const objectManager = new Manager();

            expect("name" in objectManager).toEqual(true);
            expect("id" in objectManager).toEqual(true);
            expect("email" in objectManager).toEqual(true);
            expect("officeNumber" in objectManager).toEqual(true);
        });
    });

});

test("can add name, id, email and officenumber with contructor", () => {
    const name = "Payton";
    const id = 555;
    const email = "payton@gmail.com";
    const officeNumber = 5555555555
    const manager = new Manager("Payton", 555, "payton@gmail.com", 5555555555);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('getName function works', () => {
    const manager = new Manager("Payton", 555, "payton@gmail.com", 5555555555);

    expect(manager.getName()).toBe("Payton");
});

test('getId function works', () => {
    const manager = new Manager("Payton", 555, "payton@gmail.com", 5555555555);

    expect(manager.getId()).toBe(555);
});

test('getEmail function works', () => {
    const manager = new Manager("Payton", 555, "payton@gmail.com", 5555555555);

    expect(manager.getEmail()).toBe("payton@gmail.com");
});

test('getGithub function works', () => {
    const manager = new Manager("Payton", 555, "payton@gmail.com", 5555555555);
    
    expect(manager.getOfficeNumber()).toBe(5555555555);
});

test('getRole function works', () => {
    const manager = new Manager("Payton", 555, "payton@gmail.com", 55555555555);

    expect(manager.getRole()).toBe("Manager");
});
