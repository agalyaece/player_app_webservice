import AddMatchPlayer from "../../models/matches/match_player.module.js";

export const createMatchPlayers = async (req, res) => {
    const matches = req.body;
    const existingMatch = await AddMatchPlayer.findOne({ tournament_name: matches.tournament_name, team_A: matches.team_A, team_B: matches.team_B, match_date: matches.match_date });

    if (existingMatch) {
        Object.assign(existingMatch, matches);
        try {
            await existingMatch.save();
            return res.status(200).json({ success: true, message: "Players for this Match updated successfully", data: existingMatch });
        } catch (error) {
            // console.log(error);
            return res.status(500).json({ success: false, message: "Server Error" });
        }
    }
    if (!matches.tournament_name || !matches.team_A || !matches.team_B || !matches.players_team_A || !matches.players_team_B ) {
        return res.status(400).json({ success: false, message: "Provide all fields" });
    }

    const newMatch = new AddMatchPlayer(matches);
    try {
        await newMatch.save();
        // console.log(newMatch);
        res.status(201).json({ success: true, message: "Players for this Match added successfully", data: newMatch });
    } catch (error) {
        // console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}