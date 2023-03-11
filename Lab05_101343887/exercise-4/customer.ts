export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(fn: string, ln : string, age: number) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
    public GetAge() {
       console.log(this.age)
    }
}