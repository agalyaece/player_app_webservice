import express from "express";
import { createMatches, deleteMatch, editMatches, getMatches, getTeamPlayers } from "../controller/matches/matches.controller.js";
import { createMatchPlayers } from "../controller/matches/match_players.controller.js";
const router = express.Router();


router.post("/add_match", createMatches);
router.get("/get_matches", getMatches);
router.delete("/delete_match/:id", deleteMatch);
router.patch("/edit_matches/:id", editMatches);
router.get ("/get_players/:team_A/:team_B", getTeamPlayers);
router.post("/add_players_to_team", createMatchPlayers);

export default router;
