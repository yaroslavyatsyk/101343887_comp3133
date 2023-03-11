class Customer {
    private firstName: string;
    private lastName: string;

    constructor(fn: string, ln : string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

let customer = new Customer("John","Smith")
customer.greeter();