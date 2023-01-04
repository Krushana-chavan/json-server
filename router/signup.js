const { Router } = require("express");
const UserModel = require("../schema/user.mode");

const signuUpRouter = Router();

signuUpRouter.get("/", (req, res) => {
  return res.send("hello");
});
signuUpRouter.post("/", async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const user = new UserModel({ name, age, email, password });
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send(error);
  }
});
signuUpRouter.put("/:id", () => {});
signuUpRouter.patch("/:id", () => {});
signuUpRouter.delete("/:id", () => {});

module.exports = signuUpRouter;
