Calculator = function(){
	this.value = 0;
};

Calculator.prototype.add = function(number){
	if(typeof(number) == "number"){
		this.value += number;
	} else {
		alert("Arguments must be a number");
	}
};

Calculator.prototype.subtract = function(number){
	if(typeof(number) == "number"){
		this.value +-= number;
	} else {
		alert("Arguments must be a number");
	}
};
/*function addition(firstNumber, secondNumber){
	if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number"){
	var sum = firstNumber + secondNumber;
	return sum;
} else {
	alert("Arguments must both be a number");
}
}*/