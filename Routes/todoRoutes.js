import express from "express";
import { addTodo, getTodo, deleteTodo } from "../Controller/todoController.js";

const router = express.Router();

router.post("/addtodo", addTodo);
router.get("/gettodo", getTodo);
router.delete("/deletetodo/:id", deleteTodo);

export default router;