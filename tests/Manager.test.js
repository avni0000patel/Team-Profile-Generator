const Manager = require("../lib/Manager.js");
console.log(Manager);

describe("Manager", () => {
    const name = "Anna";
    const id = "2";
    const email = "anna@gmail.com";
    const officeNumber = "101";
    const role = "Manager";

    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);

    it("Should return the name", () => {
        expect(manager.getName()).toEqual(name);
        console.log(manager.getName());
    });

    it("Should return the id", () => {
        expect(manager.getId()).toEqual(id);
        console.log(manager.getId());
    });

    it("Should return the email", () => {
        expect(manager.getEmail()).toEqual(email);
        console.log(manager.getEmail());
    });

    it("Should return the officeNumber", () => {
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
        console.log(manager.getOfficeNumber());
    });

    it("Should return the role", () => {
        expect(manager.getRole()).toEqual(role);
        console.log(manager.getRole());
    });
});
