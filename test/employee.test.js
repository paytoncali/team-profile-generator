const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isMainThread } = require('worker_threads');
const Employee = require('../lib/employee');
const employee = require('../lib/employee');

describe ("Employee", () => {
    describe("start", () => {
        it("returns object with name, id, and email", () => {
            const objectEmployee = new Employee();

            expect("name").toEqual(true);
            expect("id").toEqual(true);
            expect("email").toEqual(true);
        })
    })
});


