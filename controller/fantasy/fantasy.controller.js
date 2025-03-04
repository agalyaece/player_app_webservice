import AddMatchPlayer from "../../models/matches/match_player.module.js";

const filterTeams = async (team_A, team_B, tournament_name, match_date) => {
  try {
    // console.log('Filtering teams with params:', { team_A, team_B, tournament_name, match_date }); // Add for debugging
    const filteredData = await AddMatchPlayer.find({
      team_A: team_A,
      team_B: team_B,
      tournament_name: tournament_name,
      match_date: match_date,
    });
    // console.log ('filteredData:', filteredData); // Add for debugging
    return filteredData
  } catch (error) {
    // console.error('Error filtering players:', error);
    throw error;
  }
};

export const getTeamPlayers = async (req, res) => {
  const { team_A, team_B, tournament_name, match_date } = req.params;
  try {
    // console.log('Received params:', { team_A, team_B, tournament_name, match_date }); // Add for debugging
    const filteredPlayers = await filterTeams(team_A, team_B, tournament_name, match_date);
    res.status(201).json(filteredPlayers);
    // console.log('Filtered players:', filteredPlayers); // Add for debugging
  } catch (error) {
    // console.error('Error in route:', error);
    res.status(500).json({ error: error.message });
  }
};
