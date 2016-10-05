describe("Calculator", function(){

	beforeEach(function(){
		 calc = new Calculator();
	});

	describe('Addition function',function(){
		it('should add two numbers together and return the result', function(){
			calc.add(2);
			calc.add(2);
			expect(calc.value).toBe(4);
		});
		it("should not return 4 if the parameters given dont't add up to 4", function(){
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});
		it("should have called the alert function if either number is undefined",function(){
			spyOn(window,"alert");
			calc.add();
			expect(window.alert).toHaveBeenCalledWith("Arguments must be a number");
		});
	});

	describe('Subtraction function',function(){
		it('should subtract two numbers and return the result',function(){
			calc.subtract(5);
			calc.subtract(3);
			expect(calc.value).toBe(2);
		});
		it("should not return 2 if the subtraction of the parameters given dont't come upto 2", function(){
			calc.subtract(12);
			calc.subtract(7);
			expect(calc.value).toBe(5);
		});
		it("should have called the alert function if either number is undefined",function(){
			spyOn(window,"alert");
			calc.subtract();
			expect(window.alert).toHaveBeenCalledWith("Arguments must be a number");
		});
	});
});