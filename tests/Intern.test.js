const Intern = require("../lib/Intern.js");
console.log(Intern);

describe("Intern", () => {
    const internName = "Ferb";
    const internId = "4";
    const internEmail = "ferb@gmail.com";
    const school = "Siena College";
    const internRole = "Intern";

    const intern = new Intern(internName, internId, internEmail, school);
    console.log(intern);

    it("Should return the internName", () => {
        expect(intern.getName()).toEqual(internName);
        console.log(intern.getName());
    });

    it("Should return the internId", () => {
        expect(intern.getId()).toEqual(internId);
        console.log(intern.getId());
    });

    it("Should return the internEmail", () => {
        expect(intern.getEmail()).toEqual(internEmail);
        console.log(intern.getEmail());
    });

    it("Should return the school", () => {
        expect(intern.getSchool()).toEqual(school);
        console.log(intern.getSchool());
    });

    it("Should return the internRole", () => {
        expect(intern.getRole()).toEqual(internRole);
        console.log(intern.getRole());
    });
});
