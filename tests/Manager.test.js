const Manager = require("../lib/Manager.js");
console.log(Manager);

describe("Manager", () => {
    const managerName = "Anna";
    const managerId = "2";
    const managerEmail = "anna@gmail.com";
    const officeNumber = "101";
    const managerRole = "Manager";

    const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
    console.log(manager);

    it("Should return the managerName", () => {
        expect(manager.getName()).toEqual(managerName);
        console.log(manager.getName());
    });

    it("Should return the managerId", () => {
        expect(manager.getId()).toEqual(managerId);
        console.log(manager.getId());
    });

    it("Should return the managerEmail", () => {
        expect(manager.getEmail()).toEqual(managerEmail);
        console.log(manager.getEmail());
    });

    it("Should return the officeNumber", () => {
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
        console.log(manager.getOfficeNumber());
    });

    it("Should return the managerRole", () => {
        expect(manager.getRole()).toEqual(managerRole);
        console.log(manager.getRole());
    });
});
