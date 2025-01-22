import Player from "../../models/home/players.module.js";

export const createPlayer = async (req, res) => {

    const players = req.body;

    // Check if player with same details already exists
    const existingPlayer = await Player.findOne({ name: players.name, age: players.age, born: players.born });
    if (existingPlayer) {
        return res.status(400).json({ success: false, message: "Player with same details already exists" });
    }

    if (!players.name || !players.age || !players.born) {
        return res.status(400).json({ success: false, message: "Provide all fields" })
    }

    const newPlayers = new Player(players);

    try {
        await newPlayers.save();
        res.status(201).json({ success: true, message: "player added successfully", data: newPlayers });
    } catch (error) {

        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getPlayers = async (req, res) => {

    await Player.find().then((data) => {
        res.status(201).json(data);

    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })

}



export const updatePlayer = (req, res) => {
    const id = req.params.id;
    Player.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => res.status(201).json({ msg: "player Updated successfully" }))
        .catch(err => {
            res.status(500).send(err.message);

        })
}

export const deletePlayer = (req, res) => {
    const id = req.params.id;


    Player.findByIdAndDelete(id)
        .then((result) => {
            if (result) {
                res.json({ msg: "Player deleted successfully" });
            } else {
                res.status(404).json({ msg: "Player not found" });
            }
        })
        .catch((err) => {

            res.status(500).json({ msg: "Error deleting player", error: err.message });
        });
}