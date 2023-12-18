const fs = require("fs");

const content = fs.readFileSync("./test.txt", "utf-8");
const cleanContent = content.split(/\s+/).join(" ");
console.log(cleanContent);
fs.writeFileSync("./test.txt", cleanContent);
