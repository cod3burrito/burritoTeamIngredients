const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.role = "Engineer";
        this.github = github;
    }
}