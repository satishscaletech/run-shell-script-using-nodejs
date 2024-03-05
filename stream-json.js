const { chain } = require("stream-chain");

const { parser } = require("stream-json");
const { pick } = require("stream-json/filters/Pick");
const { ignore } = require("stream-json/filters/Ignore");
const { streamValues } = require("stream-json/streamers/StreamValues");

const fs = require("fs");
const zlib = require("zlib");

const pipeline = chain([
  fs.createReadStream(
    "/home/scaletech-sm/Downloads/nachrichten_clickhouse.json.gz"
  ),
  zlib.createGunzip(),
  parser(),
  pick({ filter: "data" }),
  ignore({ filter: /\b_meta\b/i }),
  streamValues(),
  (data) => {
    const value = data.value;
    console.log("value", value);
    return value;
  },
]);

let counter = 0;
pipeline.on("data", (chunk) => {
  console.log("chunk==============>", chunk);
  ++counter;
});
pipeline.on("end", () => console.log(`Total news count: ${counter}.`));
