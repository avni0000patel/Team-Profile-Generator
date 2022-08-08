const Engineer = require("../lib/Engineer.js");
console.log(Engineer);

describe("Engineer", () => {
    const name = "Brandon";
    const id = "3";
    const email = "brandon@gmail.com";
    const github = "brandon@github.com";
    const role = "Engineer";

    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);

    it("Should return the name", () => {
        expect(engineer.getName()).toEqual(name);
        console.log(engineer.getName());
    });

    it("Should return the id", () => {
        expect(engineer.getId()).toEqual(id);
        console.log(engineer.getId());
    });

    it("Should return the email", () => {
        expect(engineer.getEmail()).toEqual(email);
        console.log(engineer.getEmail());
    });

    it("Should return the github", () => {
        expect(engineer.getGitHub()).toEqual(github);
        console.log(engineer.getGitHub());
    });

    it("Should return the role", () => {
        expect(engineer.getRole()).toEqual(role);
        console.log(engineer.getRole());
    });
});
