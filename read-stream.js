const { error } = require("console");
const fs = require("fs");

// Define the path to your JSON file
const filePath = "/home/scaletech-sm/Downloads/nachrichten_clickhouse.json";

// Create a readable stream to read the JSON file
const stream = fs.createReadStream(filePath, {
  encoding: "utf8",
  //highWaterMark: 100,
});

const readStream = await fs
      .createReadStream(`${JSON_FILE_PATH.NEWS_MATFLIX}`, 'utf-8')
      .pipe(StreamArray.withParser());
// Define a function to handle data read from the stream
const processData = (data) => {
  // Process the data as neededte
  console.log("chunk file data ============>", data);
};

// Listen for 'data' events on the stream
let isData = false;

stream.on("data", (chunk) => {
  // Convert the chunk to a string and split it by newline characters
  const lines = chunk.toString().split("\n");
  let skip = 1;
  lines.forEach((line) => {
    // Parse each line as JSON and process it
    try {
      //   const jsonData = JSON.parse(line);
      //console.log("line", line);

      if (line.trim() == '"data":') {
        skip = 0;
        isData = true;
        //process.exit();
      }

      //   if (line.trim() == "]," && isData) {
      //     processData(line);
      //     skip = 1;
      //     //process.exit();
      //   }

      if (skip === 0) {
        processData(line);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
});

// Handle errors on the stream
stream.on("error", (error) => {
  console.error("Error reading file:", error);
});

// Handle the end of the stream
stream.on("end", () => {
  console.log("Finished reading the file.");
});
