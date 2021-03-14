const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe ("Engineer", () => {
    describe("Initialization", () => {
        it("returns object with name, id, email and github", () => {
            const objectEngineer = new Engineer();

            expect("name" in objectEngineer).toEqual(true);
            expect("id" in objectEngineer).toEqual(true);
            expect("email" in objectEngineer).toEqual(true);
        });
    });

});

test("can add name, id, email and github with contructor", () => {
    const name = "Payton";
    const id = 555;
    const email = "payton@gmail.com";
    const github = "paytoncali"
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "paytoncali");

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
});

test('getName function works', () => {
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "payton");

    expect(engineer.getName()).toBe("Payton");
});

test('getId function works', () => {
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "paytoncali");

    expect(engineer.getId()).toBe(555);
});

test('getEmail function works', () => {
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "paytoncali");

    expect(engineer.getEmail()).toBe("payton@gmail.com");
});

test('getGithub function works', () => {
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "paytoncali");
    
    expect(engineer.getGithub()).toBe("paytoncali");
});

test('getRole function works', () => {
    const engineer = new Engineer("Payton", 555, "payton@gmail.com", "paytoncali");

    expect(engineer.getRole()).toBe("Engineer");
});
