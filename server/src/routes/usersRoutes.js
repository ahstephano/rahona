import express from "express";
import { addNewUsers } from "../controllers/usersControllers.js";

const router = express.Router();

// router.get('/:id',);
router.get('/', addNewUsers);

export default router;