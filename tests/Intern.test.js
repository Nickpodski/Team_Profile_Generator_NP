const Intern = require('../lib/Intern');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let int = new Intern(1, "Nick", "Nick@fakeemail.com", "NickU");

            expect(int.id).toBe(1);
            expect(int.name).toBe("Nick");
            expect(int.email).toBe("Nick@fakeemail.com");
            expect(int.school).toBe("NickU");
        })
    })
})