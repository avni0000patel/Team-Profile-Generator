const Employee = require("../lib/Employee.js");
console.log(Employee);

describe("Employee", () => {
    const name = "Emmy";
    const id = "1";
    const email = "emmy@gmail.com";
    const role = "Employee";

    const employee = new Employee(name, id, email);
    console.log(employee);

    it("Should return the name", () => {
        expect(employee.getName()).toEqual(name);
        console.log(employee.getName());
    });

    it("Should return the id", () => {
        expect(employee.getId()).toEqual(id);
        console.log(employee.getId());
    });

    it("Should return the email", () => {
        expect(employee.getEmail()).toEqual(email);
        console.log(employee.getEmail());
    });

    it("Should return the role", () => {
        expect(employee.getRole()).toEqual(role);
        console.log(employee.getRole());
    });
});
