const Engineer = require('../lib/Engineer');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let eng = new Engineer(1, "Nick", "Nick@fakeemail.com", "Nick");

            expect(eng.id).toBe(1);
            expect(eng.name).toBe("Nick");
            expect(eng.email).toBe("Nick@fakeemail.com");
            expect(eng.github).toBe("Nick");
        })
    })
})