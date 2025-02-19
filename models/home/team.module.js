import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
    },
    team_name: {
        type: String,
        required: true,
    },
    players: {
        type: [{
            player_name: String,
            player_team: String,
        }],
        required: true,
    },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
export default Team;
