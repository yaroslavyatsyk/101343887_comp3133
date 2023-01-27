var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator app", () => {
  describe("Addition", () => {
    it("It adds two numbers, Test (1)", () => {
      let a = 5
      let b = 2

      expect(calculator.add(a,b)).to.equal(7);
     
    });
    it("It adds two numbers, Test (2)", () => {
        let a = 5
        let b = 2
  
        expect(calculator.add(a,b)).to.equal(6);
       
      });
  });

  describe("Deduction", () => {
    it("Substracts two numbers Test(1)", () => {
      let a = 5
      let b = 2

      expect(calculator.sub(a,b)).to.equal(3);
    });
    it("Substracts two numbers Test(2)", () => {
        let a = 5
        let b = 2
  
        expect(calculator.sub(a,b)).to.equal(2);
      });
  });
  describe("Multiplication", () => {
    it("Multiplies two numbers, Test (1)", () => {
      let a = 5
      let b = 2

      expect(calculator.mul(a,b)).to.equal(10);
    });
    it("Multiplies two numbers, Test(2)", () => {
        let a = 5
        let b = 2
  
        expect(calculator.mul(a,b)).to.equal(12);
      });
  });
  describe("Dividing", () => {
    it("Dividing two numbers, Test(1)", () => {
      let a = 10
      let b = 2

      expect(calculator.div(a,b)).to.equal(5);
      
    });
    it("Dividing two numbers, Test(2)", () => {
        let a = 10
        let b = 2
  
        expect(calculator.div(a,b)).to.equal(4);
      });
   
  });
  describe("Reminder", () => {
    it("Mods two numbers, Test (1)", () => {
      let a = 5
      let b = 2

      expect(calculator.rem(a,b)).to.equal(1);
     
    });
    it("Mods two numbers, Test (2)", () => {
        let a = 5
        let b = 2
  
        expect(calculator.rem(a,b)).to.equal(2);
       
      });
  });
});