const { exec } = require("child_process");

async function test() {
  try {
    var script = exec("sh script.sh", (error, stdout, stderr) => {
      console.log("stdout=====>", stdout);
      console.log("stderr================>", stderr);
      //   console.error(error);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    });
  } catch (error) {
    console.log("error============>");
  }
}

test();
