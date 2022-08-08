const Engineer = require("../lib/Engineer.js");
console.log(Engineer);

describe("Engineer", () => {
    const engineerName = "Brandon";
    const engineerId = "3";
    const engineerEmail = "brandon@gmail.com";
    const github = "brandon@github.com";
    const engineerRole = "Engineer";

    const engineer = new Engineer(engineerName, engineerId, engineerEmail, github);
    console.log(engineer);

    it("Should return the engineerName", () => {
        expect(engineer.getName()).toEqual(engineerName);
        console.log(engineer.getName());
    });

    it("Should return the engineerId", () => {
        expect(engineer.getId()).toEqual(engineerId);
        console.log(engineer.getId());
    });

    it("Should return the managerEmail", () => {
        expect(engineer.getEmail()).toEqual(engineerEmail);
        console.log(engineer.getEmail());
    });

    it("Should return the github", () => {
        expect(engineer.getGitHub()).toEqual(github);
        console.log(engineer.getGitHub());
    });

    it("Should return the managerRole", () => {
        expect(engineer.getRole()).toEqual(engineerRole);
        console.log(engineer.getRole());
    });
});
