import Team from "../../models/home/team.module.js";

const filterTeams = async (team_A, team_B) => {
    try {
      const filteredData = await Team.find({
        team_name: { $in: [team_A, team_B] }
      });
      return filteredData
    } catch (error) {
      // console.error('Error filtering players:', error);
      throw error;
    }
  };
  
  
  export const getTeamPlayers = async (req, res) => {
    const { team_A, team_B } = req.params;
    try {
      const filteredPlayers = await filterTeams(team_A, team_B);
      res.status(201).json(filteredPlayers);
      // console.log('Filtered players:', filteredPlayers); // Add for debugging

    } catch (error) {
      // console.error('Error in route:', error);
      res.status(500).json({ error: error.message });
    }
  }
  