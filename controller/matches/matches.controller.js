import Match from "../../models/matches/matches.module.js";

export const createMatches = async (req, res) => {
    const matches = req.body;
    const existingMatch = await Match.findOne({ tournament_name: matches.tournament_name, team_A: matches.team_A, team_B: matches.team_B, match_date: matches.match_date, match_order: matches.match_order, match_time: matches.match_time, });

    if (existingMatch) {
        return res.status(400).json({ success: false, message: "This Match already exists, try adding new" });
    }
    if (!matches.tournament_name || !matches.team_A || !matches.team_B || !matches.match_date || !matches.match_order || !matches.match_time ) {
        return res.status(400).json({ success: false, message: "Provide all fields" });
    }

    const newMatch = new Match(matches);
    try {
        await newMatch.save();
        res.status(201).json({ success: true, message: "Match added successfully", data: newMatch });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const getMatches = async (req,res) => {
    await Match.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}

export const deleteMatch = async (req,res)=> {
    const id = req.params.id;
    await Match.findByIdAndDelete(id)
    .then((result) => {
        if (result) {
            res.json({ msg: "Match deleted successfully" });
        } else {
            res.status(404).json({ msg: "Match not found" });
        }
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

export const editMatches = async (req,res)=>{
    const id = req.params.id;
    Match.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(201).json({ msg: "Match Updated successfully" }))
        .catch(err => {
            res.status(500).send(err.message);

        })
}