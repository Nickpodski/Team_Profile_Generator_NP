const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let emp = new Employee(1, "Nick", "Nick@fakeemail.com");

            expect(emp.id).toBe(1);
            expect(emp.name).toBe("Nick");
            expect(emp.email).toBe("Nick@fakeemail.com");
        })
    })
})