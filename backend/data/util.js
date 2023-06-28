const fs = require("fs-promise");

async function readData() {
  const data = await fs.readFile("posts.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("posts.json", JSON.stringify(data));
}

exports.readData = readData;
exports.writeData = writeData;
