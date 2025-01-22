import express from "express";
import { createPlayer, deletePlayer, getPlayers, updatePlayer } from "../controller/home/players.controller.js";

const router = express.Router();

router.post("/players/add_player", createPlayer);
router.get("/players/get_players", getPlayers);

router.patch("/players/update_player/:id", updatePlayer);

router.delete("/players/delete_player/:id", deletePlayer)

export default router;