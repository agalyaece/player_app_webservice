import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    born: {
        type: String,
        required: true,
    },
    teams: {
        type: [String],
    },
}, { timestamps: true })

const Player = mongoose.model("Player", playerSchema);

export default Player;