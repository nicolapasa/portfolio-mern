const router = require("express").Router();

const Project = require("../models/Project.model");
const fileUploader = require("../config/cloudinary.config");
router.get("/", async (req, res, next) => {
  try {
    const response = await Project.find();
    console.log(response);
    return res.status(201).json({ projects: response });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post(
  "/createProject",
  fileUploader.single("picture"),
  async (req, res) => {
    const payload = { ...req.body };

    if (req.file) {
      payload.picture = req.file.path;
    } else {
      delete payload.picture;
    }

    try {
      const response = await Project.create(payload);
      return res.status(201).json({ message: "post Created" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
);

module.exports = router;
