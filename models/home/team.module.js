import mongoose from "mongoose";


const teamSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    players: {
        type: [String],
        required: true,
    },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);
export default Team;
