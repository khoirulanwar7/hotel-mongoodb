import express from "express";
import { createRoom, deleteRoom, getRooms, upadateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, upadateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);
router.get("/:id", getRooms);
router.get("/", getRooms);

export default router;
