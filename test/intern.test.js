const { objectExpression } = require("@babel/types");
const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe ("Intern", () => {
    describe("Initialization", () => {
        it("returns object with name, id, email and school", () => {
            const objectIntern = new Intern();

            expect("name" in objectIntern).toEqual(true);
            expect("id" in objectIntern).toEqual(true);
            expect("email" in objectIntern).toEqual(true);
            expect("school" in objectIntern).toEqual(true);
        });
    });

});

test("can add name, id, email and school with contructor", () => {
    const name = "Payton";
    const id = 555;
    const email = "payton@gmail.com";
    const school = "txst"
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
});

test('getName function works', () => {
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");

    expect(intern.getName()).toBe("Payton");
});

test('getId function works', () => {
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");

    expect(intern.getId()).toBe(555);
});

test('getEmail function works', () => {
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");

    expect(intern.getEmail()).toBe("payton@gmail.com");
});

test('getSchool function works', () => {
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");
    
    expect(intern.getSchool()).toBe("txst");
});

test('getRole function works', () => {
    const intern = new Intern("Payton", 555, "payton@gmail.com", "txst");

    expect(intern.getRole()).toBe("Intern");
});
