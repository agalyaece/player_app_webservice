import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true,
    },
    team_A: {
        type: String,
        required: true,
    },
    team_B: {
        type: String,
        required: true,
    },
    match_date: {
        type: Date,
        required: true,
    },
    match_order: {
        type: String,
        required: true,
    },
    match_status: {
        type: String,
    },
    match_time: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                console.log(`Validating match_time: ${value}`);

                const regex = /^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM)$/i;
                return regex.test(value);
            },
            message: 'Invalid time format. Please use HH:MM'
        }

    },

}, { timestamps: true });

const Match = mongoose.model("Match", matchSchema);

export default Match;
