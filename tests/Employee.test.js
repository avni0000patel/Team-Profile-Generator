const Employee = require("../lib/Employee.js");
console.log(Employee);

describe("Employee", () => {
    const employeeName = "Emmy";
    const employeeId = "1";
    const employeeEmail = "emmy@gmail.com";
    const employeeRole = "Employee";

    const employee = new Employee(employeeName, employeeId, employeeEmail);
    console.log(employee);

    it("Should return the employeeName", () => {
        expect(employee.getName()).toEqual(employeeName);
        console.log(employee.getName());
    });

    it("Should return the employeeId", () => {
        expect(employee.getId()).toEqual(employeeId);
        console.log(employee.getId());
    });

    it("Should return the employeeEmail", () => {
        expect(employee.getEmail()).toEqual(employeeEmail);
        console.log(employee.getEmail());
    });

    it("Should return the role", () => {
        expect(employee.getRole()).toEqual(employeeRole);
        console.log(employee.getRole());
    });
});
