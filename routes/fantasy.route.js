import express from "express";
import { getTeamPlayers } from "../controller/fantasy/fantasy.controller.js";
const router = express.Router();


router.get("/get_players/:tournament_name/:team_A/:team_B/:match_date", getTeamPlayers);

export default router;