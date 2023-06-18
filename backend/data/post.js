const fs = require("node:fs/promises");

const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");

async function readData() {
  const data = await fs.readFile("posts.json", "utf8");
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile("posts.json", JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.posts) {
    throw new NotFoundError("Could not find any posts.");
  }
  return storedData.posts;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.posts || storedData.posts.length === 0) {
    throw new NotFoundError("Could not find any posts.");
  }

  const event = storedData.posts.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readData();
  storedData.posts.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.posts || storedData.posts.length === 0) {
    throw new NotFoundError("Could not find any posts.");
  }

  const index = storedData.posts.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  storedData.posts[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.posts.filter((ev) => ev.id !== id);
  await writeData({ posts: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
