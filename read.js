const fs = require("fs");
const readline = require("readline");

// Define the path to your JSON file
const filePath = "test.json";

// Create a readable stream for the JSON file
const readStream = fs.createReadStream(filePath);

// Create an interface to read the stream line by line
const rl = readline.createInterface({
  input: readStream,
  crlfDelay: Infinity,
});

// Function to process each line of the JSON file
rl.on("line", (line) => {
  // Parse each line of JSON
  console.log("line", line);
  //   const data = JSON.parse(line);
  // Process the data as needed
  //   processJsonData(data);
});

// Function to process the parsed JSON data
function processJsonData(data) {
  // Process the data as needed
  // Example: Log the data
  console.log(data);
}
