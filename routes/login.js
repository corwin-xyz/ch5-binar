const express = require("express");
const router = express();

router.use(express.Router());
router.use(express.json());

router.get("/", (req, res, next) =>
  res.render("login", { title: "Login Page" })
);

router.post("/", (req, res, next) => {
  console.log(req.query);
  res.status(200);
});

module.exports = router;
