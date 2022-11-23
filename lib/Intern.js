const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.role = "Intern";
        this.school = school;
    }
}