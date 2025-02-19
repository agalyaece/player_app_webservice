import Tournament from "../../models/home/tournament.module.js";

export const createTournament = async (req, res) => {
    const tournaments = req.body;

    const existingTournament = await Tournament.findOne({ tournament_name: tournaments.tournament_name, hosting_country: tournaments.hosting_country });

    if (existingTournament) {
        return res.status(400).json({ success: false, message: "Tournament already exists, try adding new" });
    }
    if (!tournaments.tournament_name || !tournaments.hosting_country) {
        return res.status(400).json({ success: false, message: "Provide all fields" });
    }

    const newTournament = new Tournament(tournaments);
    try {
        await newTournament.save();
        res.status(201).json({ success: true, message: "Tournament added successfully", data: newTournament });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const getTournaments = async (req, res) => {
    await Tournament.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}

export const editTournament = async (req,res)=>{
    const id = req.params.id;
    Tournament.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(201).json({ msg: "Tournament Updated successfully" }))
        .catch(err => {
            res.status(500).send(err.message);

        })
}

export const deleteTournament = async (req,res)=> {
    const id = req.params.id;
    await Tournament.findByIdAndDelete(id)
    .then((result) => {
        if (result) {
            res.json({ msg: "Tournament deleted successfully" });
        } else {
            res.status(404).json({ msg: "Tournament not found" });
        }
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}