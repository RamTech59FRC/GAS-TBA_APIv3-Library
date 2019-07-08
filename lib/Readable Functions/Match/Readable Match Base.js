/**
 * Returns a detailed match breakdown with the given match key. It will match
 * the match key to the right year to return the desired breakdown
 * @param {String}
 *            matchKey - TBA Match Key
 * @returns {Array} TBA detailed match view
 */
function getMatchReadable(matchKey) {
	switch (matchKey.substring(0, 4)) {
	case "2015":
		return matchBreakdown2015(matchKey);
	/*case "2016":
		return matchBreakdown2016(matchKey);
		break;
	case "2017":
		return matchBreakdown2017(matchKey);
		break;*/
	case "2018":
		return matchBreakdown2018(matchKey);
	case "2019":
		return matchBreakdown2019(matchKey);
	default:
		return "Current case does not exist. If you would like it to exist, submit an issue on GitHub. Breakdowns do not exist pre-2015.";
	}
}

function getTotalAuto_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["autoPoints"], "Total Auto",
			getScoreBreakdown_(matchData, "blue")["autoPoints"] ];
}

function getTotalTeleop_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["teleopPoints"],
			"Total Teleop",
			getScoreBreakdown_(matchData, "blue")["teleopPoints"] ];
}

function getFouls_(matchData) {
	return [ "+" + getScoreBreakdown_(matchData, "red")["foulPoints"], "Fouls",
			"+" + getScoreBreakdown_(matchData, "blue")["foulPoints"] ];
}

function getAdjustments_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["adjustPoints"],
			"Adjustment", getScoreBreakdown_(matchData, "blue")["adjustPoints"] ];
}

function getTotalScore_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["totalPoints"],
			"Total Score", getScoreBreakdown_(matchData, "blue")["totalPoints"] ];
}

function getRankingPoints_(matchData) {
	return [ "+" + getScoreBreakdown_(matchData, "red")["rp"] + " RP",
			"Ranking Points",
			"+" + getScoreBreakdown_(matchData, "blue")["rp"] + " RP" ];
}

function getTeamsMatch_(matchData) {
	var redTeams = matchData["alliances"]["red"]["team_keys"].toString()
			.replace(/frc/g, "").replace(/,/g, "\n");
	var blueTeams = matchData["alliances"]["blue"]["team_keys"].toString()
			.replace(/frc/g, "").replace(/,/g, "\n");

	return [ redTeams, "Teams", blueTeams ];
}

function getScoreBreakdown_(matchData, header) {
	return matchData["score_breakdown"][header];
}

/**
 * Takes matchData and returns the data associated with the header. While there
 * is only one header spot, you can put multiple headers to go down the list.
 * 
 * @param {JSON
 *            Object} matchData - match data in JSON format
 * @param {String}
 *            header - JSON Header
 * @returns returns the data associated with the header
 * 
 * Example usage:
 * 
 * getHeader(matchData, "alliances", "red", "team_keys")
 */
function getHeader_(matchData, header) {

	for (var i = 1; i < arguments.length; i++) {
		matchData = matchData[arguments[i]];
	}

	return matchData;
}

function getSheet_() {
	return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function getActiveCell_() {
	return getSheet_().getActiveCell();
}