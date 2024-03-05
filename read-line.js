const fs = require("fs");
const readline = require("readline");

// File path of the JSON file
const filePath = "/home/scaletech-sm/Downloads/nachrichten_clickhouse.json";

// Create a readline interface
const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity,
});

let jsonData = "";

// Read JSON data line by line
rl.on("line", (line) => {
  jsonData += line;
});

// Parse JSON data after reading is complete
rl.on("close", () => {
  try {
    const jsonObject = JSON.parse(jsonData);

    // Accessing nested objects
    console.log("jsonObject:", jsonObject);
  } catch (error) {
    console.error("Error parsing JSON content:", error);
  }
});
