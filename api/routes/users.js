import express from "express";
import { deletedUser, getUser, getUsers, updatedUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuth", verifyToken, (req, res, next) => {
//   res.send("Hello User, token berhasil terverifikasi")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello User, anda sudah login dan dapat menghapus account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, anda sudah login dan dapat menghapus account")
// })


router.put("/:id", verifyUser, updatedUser)
router.delete("/:id", verifyUser, deletedUser)
router.get("/:id", verifyUser, getUser)
router.get("/", verifyAdmin, getUsers)

export default router;
