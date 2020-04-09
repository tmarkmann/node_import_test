export class Person {
    name: string;
    constructor(personName: string) {
        this.name = personName;
    }
    greet():string {
        return "Hello i'm " + this.name;
    }
}