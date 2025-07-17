const express = require("express");
const userController = require("../controllers/user.controller");
const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/rbac.middleware");
const validateRequest = require("../middleware/validate-request.middleware");
const { createUserSchema } = require("../validators/user.schema");
const router = express.Router();

router.post(
  "/",
  // authenticate,
  // authorize(["user", "admin"]),
  // validateRequest(createUserSchema),
  userController.create
);
router.get("/", authenticate, userController.findAll);
router.get("/:id", userController.findOne);
router.put("/:id", userController.update);
router.delete("/:id", authenticate, authorize(["admin", "user"]), userController.delete
);

module.exports = router;
