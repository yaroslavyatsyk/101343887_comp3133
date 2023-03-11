var Customer = /** @class */ (function () {
    function Customer(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();
