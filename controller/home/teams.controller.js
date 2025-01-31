import mongoose from "mongoose";


import Player from "../../models/home/players.module.js";
import Team from "../../models/home/team.module.js";

export const createTeam = async (req, res) => {
    const teams = req.body;

    const existingTeam = await Team.findOne({ name: teams.name, category: teams.category });
    if (existingTeam) {
        return res.status(400).json({ success: false, message: "Team already exists, try adding new" });
    }
    if (!teams.category || !teams.name || !teams.players) {
        return res.status(400).json({ success: false, message: "Provide all fields" })
    }
    const newTeams = new Team(teams);
    try {
        await newTeams.save();
        res.status(201).json({ success: true, message: "Team added successfully", data: newTeams });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
    
}

export const getTeams = async (req, res) => {
    await Team.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}

export const deleteTeam = async (req,res)=> {
    const id = req.params.id;
    await Team.findByIdAndDelete(id)
    .then((result) => {
        if (result) {
            res.json({ msg: "Team deleted successfully" });
        } else {
            res.status(404).json({ msg: "Team not found" });
        }
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

export const editTeam = async (req,res) => {
    const id = req.params.id;
    Team.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(201).json({ msg: "player Updated successfully" }))
        .catch(err => {
            res.status(500).send(err.message);

        })
}