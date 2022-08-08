const Intern = require("../lib/Intern.js");
console.log(Intern);

describe("Intern", () => {
    const name = "Ferb";
    const id = "4";
    const email = "ferb@gmail.com";
    const school = "Siena College";
    const role = "Intern";

    const intern = new Intern(name, id, email, school);
    console.log(intern);

    it("Should return the name", () => {
        expect(intern.getName()).toEqual(name);
        console.log(intern.getName());
    });

    it("Should return the id", () => {
        expect(intern.getId()).toEqual(id);
        console.log(intern.getId());
    });

    it("Should return the email", () => {
        expect(intern.getEmail()).toEqual(email);
        console.log(intern.getEmail());
    });

    it("Should return the school", () => {
        expect(intern.getSchool()).toEqual(school);
        console.log(intern.getSchool());
    });

    it("Should return the role", () => {
        expect(intern.getRole()).toEqual(role);
        console.log(intern.getRole());
    });
});
