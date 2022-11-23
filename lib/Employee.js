class Employee {
    constructor(name, ID, email){
    this.name = name;
    this.id = ID;
    this.email = email
    this.role = "Employee"
    }
    getName(){
        return (`Name: ${this.name}`)
    }
    getID(){
        return (`ID: ${this.ID}`)
    }
    getEmail(){
        return (`Email: ${this.email}`)
    }
    getRole(){
        return (`Role: ${this.role}`)
    }
}

class Managers extends Employee{
    constructor(name, ID, email, officeNumber) {
        super(name, ID, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    
}

class Engineer extends Employee{
    constructor(name, ID, email, github) {
        super(name, ID, email);
        this.role = "Engineer";
        this.github = github;
    }
}

class Intern extends Employee{
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.role = "Intern";
        this.school = school;
    }
}


module.exports = {
    managers: Managers,
    intern: Intern,
    engineer: Engineer,
    employee: Employee,
}