// calculation of exponentiation (get the number and power from the user)
// using one while loop; degree can be positive, negative, or 0

let base = parseFloat(prompt("Enter number:"));
let exponent = parseInt(prompt("Enter Exponentiation:"));

if (isNaN(base) || isNaN(exponent)) alert("You entered uncorrect value. Please, try again.");

else {
	let result = 1, i = 0;

	while (i < exponent || i < -exponent) {
		if (exponent > 0) result *= base; // a^b;
		else if (exponent < 0) result /= base; // a^-b;
		else result = 1; // a^0;
		i++;
	}

	document.write(`<h2>${base} ^ ${exponent} = ${result}</h2>`);
}