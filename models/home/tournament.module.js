import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true,
    },
    hosting_country: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;