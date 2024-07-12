const { writeFileSync } = require("fs");
console.log("working");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/bigFile.txt", `hellow world ${i}\n`, { flag: "a" });
}
