function matchBreakdown2015(matchKey) {
	var matchData = getMatch(matchKey, "", true);
	
	var matchBreakdown = [];

	matchBreakdown.push(getTeamsMatch_(matchData));

	matchBreakdown.push(getRobotSet2015_(matchData),
			getContainerSet2015_(matchData), getToteSet2015_(matchData),
			getToteStack2015_(matchData));

	matchBreakdown.push(getTotalAuto2015_(matchData));

	matchBreakdown
			.push(getTotePoints2015_(matchData),
					getContainerPoints2015_(matchData),
					getLitterPoints2015_(matchData));

	matchBreakdown.push(getTotalTeleop2015_(matchData));

	matchBreakdown.push(getCoopertition2015_(matchData));

	matchBreakdown.push(getFouls2015_(matchData),
			getAdjustments2015_(matchData), getTotalScore2015_(matchData));
  
    return matchBreakdown;
}

function getRobotSet2015_(matchData) {
	var set = {
		blue : 0,
		red : 0
	}

	if (getScoreBreakdown_(matchData, "red")["robot_set"]) {
		set.red = 4;
	}
	if (getScoreBreakdown_(matchData, "blue")["robot_set"]) {
		set.blue = 4;
	}

	return [ set.red, "Robot Set", set.blue ];
}

function getToteSet2015_(matchData) {
	var set = {
		blue : 0,
		red : 0
	}

	if (getScoreBreakdown_(matchData, "red")["tote_set"]) {
		set.red = 6;
	}
	if (getScoreBreakdown_(matchData, "blue")["tote_set"]) {
		set.blue = 6;
	}

	return [ set.red, "Tote Set", set.blue ];
}

function getContainerSet2015_(matchData) {
	var set = {
		blue : 0,
		red : 0
	}

	if (getScoreBreakdown_(matchData, "red")["container_set"]) {
		set.red = 8;
	}
	if (getScoreBreakdown_(matchData, "blue")["container_set"]) {
		set.blue = 8;
	}

	return [ set.red, "Container Set", set.blue ];
}

function getToteStack2015_(matchData) {
	var set = {
		blue : 0,
		red : 0
	}

	if (getScoreBreakdown_(matchData, "red")["tote_stack"]) {
		set.red = 20;
	}
	if (getScoreBreakdown_(matchData, "blue")["tote_stack"]) {
		set.blue = 20;
	}

	return [ set.red, "Tote Stack", set.blue ];
}

function getTotalAuto2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["auto_points"], "Total Auto",
			getScoreBreakdown_(matchData, "blue")["auto_points"] ];
}

function getTotePoints2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["tote_points"],
			"Tote Points", getScoreBreakdown_(matchData, "blue")["tote_points"] ];
}

function getContainerPoints2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["container_points"],
			"Container Points",
			getScoreBreakdown_(matchData, "blue")["container_points"] ];
}

function getLitterPoints2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["litter_points"],
			"Litter Points",
			getScoreBreakdown_(matchData, "blue")["litter_points"] ];
}

function getTotalTeleop2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["teleop_points"],
			"Total Teleop",
			getScoreBreakdown_(matchData, "blue")["teleop_points"] ];
}

function getCoopertition2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "coopertition_points"),
			"Coopertition",
			getScoreBreakdown_(matchData, "coopertition_points")];
}

function getFouls2015_(matchData) {
	return [ "-" + getScoreBreakdown_(matchData, "red")["foul_points"],
			"Fouls", "-" + getScoreBreakdown_(matchData, "blue")["foul_points"] ];
}

function getAdjustments2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["adjust_points"],
			"Adjustments",
			getScoreBreakdown_(matchData, "blue")["adjust_points"] ];
}

function getTotalScore2015_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["total_points"],
			"Total Score",
			getScoreBreakdown_(matchData, "blue")["total_points"] ];
}