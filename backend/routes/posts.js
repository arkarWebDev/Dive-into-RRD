const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/post");
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require("../util/validation");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await getAll();
    res.json({ posts: posts });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const post = await get(req.params.id);
    res.json({ post: post });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the post failed due to validation errors.",
      errors,
    });
  }

  try {
    await add(data);
    res.status(201).json({ message: "post saved.", post: data });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.title)) {
    errors.title = "Invalid title.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (!isValidDate(data.date)) {
    errors.date = "Invalid date.";
  }

  if (!isValidImageUrl(data.image)) {
    errors.image = "Invalid image.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Updating the post failed due to validation errors.",
      errors,
    });
  }

  try {
    await replace(req.params.id, data);
    res.json({ message: "post updated.", post: data });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await remove(req.params.id);
    res.json({ message: "post deleted." });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
