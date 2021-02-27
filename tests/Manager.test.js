const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let man = new Manager(1, "Nick", "Nick@fakeemail.com", 1);

            expect(man.id).toBe(1);
            expect(man.name).toBe("Nick");
            expect(man.email).toBe("Nick@fakeemail.com");
            expect(man.officeNumber).toBe(1);
        })
    })
})