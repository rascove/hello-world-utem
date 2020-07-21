var fs = require("fs");

console.log("Begin reading file");

fs.readFile("input.txt", (error, data) =>
{
	if (error)
		console.log(error);

	console.log(data.toString());
});

console.log("End reading file");
console.log("Begin appending file");

fs.appendFile("input.txt", "I am appending a file.", (error) =>
{
	if (error)
		console.log(error);

	console.log("Appending file");
});

console.log("End appending file");
console.log("Begin re-reading file");

fs.readFile("input.txt", (error, data) =>
{
	if (error)
		console.log(error);

	console.log(data.toString());
});

console.log("Finish re-reading file");