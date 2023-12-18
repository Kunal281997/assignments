const fs = require("fs");

fs.readFile("./3-read-from-file.md", (err, data) => {
  if (!err) {
    console.log(err);
  }

  console.log(data);
});
