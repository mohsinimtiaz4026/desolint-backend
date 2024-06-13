const router = require("express").Router();
const taskRoutes = require("./taskRoutes");


router.use("/task",taskRoutes);

module.exports = router;