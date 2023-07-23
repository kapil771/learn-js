function Developer(name){
    this.name = name;
    this.type = 'Developer';
}

function Tester(name){
    this.name = name;
    this.type = 'Tester';
}

function WebDeigner(name){
    this.name = name;
    this.type = 'Web Designer';
}

function EmployeeFactory(){
    this.create = (name,type) => {
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
            case 3:
                return new WebDeigner(name);
                break;
        }
    }
}

function say(){
    console.log(`Hi, I am ${this.name}. I am working as ${this.type}`)
}

const employeeFactory = new EmployeeFactory();
const employees = []

employees.push(employeeFactory.create('Kapil Kumar',1));
employees.push(employeeFactory.create('Akash Kumar',3));

employees.forEach(emp => {
    say.call(emp);
})