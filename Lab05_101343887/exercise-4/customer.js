"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(fn, ln, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.GetAge = function () {
        console.log(this.age);
    };
    return Customer;
}());
exports.Customer = Customer;
