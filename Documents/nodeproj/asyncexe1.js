var fs = require('fs');

fs.readFile('input.txt', (error, data) =>
{
	if (error)
		console.log(error);

	console.log(data.toString());
});

console.log("Program ended");