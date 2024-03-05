const jsonfile = require("jsonfile");
const file = "/home/scaletech-sm/Downloads/nachrichten_clickhouse.json";
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err);

  console.log("object", obj);
});
