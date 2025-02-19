import express from "express";
import { createPlayer, deletePlayer, getPlayers, updatePlayer } from "../controller/home/players.controller.js";
import { createTeam, deleteTeam, editTeam, getTeams } from "../controller/home/teams.controller.js";
import { createTournament, deleteTournament, editTournament, getTournaments } from "../controller/home/tournament.controller.js";


const router = express.Router();

router.post("/players/add_player", createPlayer);
router.get("/players/get_players", getPlayers);
router.patch("/players/update_player/:id", updatePlayer);
router.delete("/players/delete_player/:id", deletePlayer)

router.post("/teams/add_team", createTeam);
router.get("/teams/get_teams", getTeams);
router.delete("/teams/delete_team/:id", deleteTeam);
router.patch("/teams/edit_team/:id", editTeam);

router.post("/tournaments/add_tournament", createTournament);
router.get("/tournaments/get_tournaments", getTournaments);
router.patch("/tournaments/edit_tournament/:id", editTournament);
router.delete("/tournaments/delete_tournament/:id", deleteTournament);



export default router;