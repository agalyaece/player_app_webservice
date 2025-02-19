import express from "express";
import { createMatches, deleteMatch, editMatches, getMatches } from "../controller/matches/matches.controller.js";
const router = express.Router();


router.post("/add_match", createMatches);
router.get("/get_matches", getMatches);
router.delete("/delete_match/:id", deleteMatch);
router.patch("/edit_matches/:id", editMatches);

export default router;
