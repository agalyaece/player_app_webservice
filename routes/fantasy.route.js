import express from "express";
import { getTeamPlayers } from "../controller/fantasy/fantasy.controller.js";
const router = express.Router();


router.get("/get_players/:team_A/:team_B", getTeamPlayers);

export default router;