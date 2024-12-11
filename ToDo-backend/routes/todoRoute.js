const {
  createTask,
  getTasks,
  deleteCompletedTasks,
  updateTaskCompletion,
} = require("../controllers/ToDoController");
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.put("/tasks/:id", authMiddleware, updateTaskCompletion);
router.delete("/tasks/completed", authMiddleware, deleteCompletedTasks);

module.exports = router;
