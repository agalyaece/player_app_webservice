import mongoose from "mongoose";

const addMatchPlayerSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true,
    },
    team_A: {
        type: String,
        required: true,
    },
    players_team_A: {
        type: [{
            player_name: String,
            player_team: String,
        }],
        required: true,
    },
    team_B: {
        type: String,
        required: true,
    },
    players_team_B: {
        type: [{
            player_name: String,
            player_team: String,
        }],
        required: true,
    },
    match_date: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const AddMatchPlayer = mongoose.model("AddMatchPlayer", addMatchPlayerSchema);
export default AddMatchPlayer;
