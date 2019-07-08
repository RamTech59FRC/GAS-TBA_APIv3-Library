function matchBreakdown2018(matchKey) {
	var matchData = getMatch(matchKey, "", true);

	var matchBreakdown = [];

	matchBreakdown.push(getTeamsMatch_(matchData));

	matchBreakdown = matchBreakdown.concat(getAutoRun2018_(matchData));

	matchBreakdown.push(getScaleAuto2018_(matchData),
			getSwitchAuto2018_(matchData), getAutoOwnership2018_(matchData),
			getTotalAuto_(matchData));

	matchBreakdown.push(getScaleBoostTeleop2018_(matchData),
			getSwitchBoostTeleop2018_(matchData),
			getTeleopOwnership2018_(matchData));

	matchBreakdown.push(getForceCubes2018_(matchData),
			getLevitateCubes2018_(matchData), getBoostCubes2018_(matchData),
			getVaultTotal2018_(matchData));

	matchBreakdown = matchBreakdown.concat(getRobotEndgame2018_(matchData));

	matchBreakdown.push(getTotalTeleop_(matchData));

	if (matchData["comp_level"].toString() === "qm") {
		matchBreakdown.push(getAutoQuest2018_(matchData),
				getFaceBoss2018_(matchData), getFouls_(matchData),
				getAdjustments_(matchData), getTotalScore_(matchData),
				getRankingPoints_(matchData));
	} else {
		matchBreakdown.push(getFouls_(matchData), getAdjustments_(matchData),
				getTotalScore_(matchData));
	}
	
	return matchBreakdown;
}

function getAutoRun2018_(matchData) {
	var autoRun = {
		Red1 : '✖',
		Red2 : '✖',
		Red3 : '✖',
		Blue1 : '✖',
		Blue2 : '✖',
		Blue3 : '✖'
	};

	if (getScoreBreakdown_(matchData, "red")["autoRobot1"].toString() === "AutoRun") {
		autoRun.Red1 = '✔';
	}
	if (getScoreBreakdown_(matchData, "red")["autoRobot2"].toString() === "AutoRun") {
		autoRun.Red2 = '✔';
	}
	if (getScoreBreakdown_(matchData, "red")["autoRobot3"].toString() === "AutoRun") {
		autoRun.Red3 = '✔';
	}
	if (getScoreBreakdown_(matchData, "blue")["autoRobot1"].toString() === "AutoRun") {
		autoRun.Blue1 = '✔';
	}
	if (getScoreBreakdown_(matchData, "blue")["autoRobot2"].toString() === "AutoRun") {
		autoRun.Blue2 = '✔';
	}
	if (getScoreBreakdown_(matchData, "blue")["autoRobot3"].toString() === "AutoRun") {
		autoRun.Blue3 = '✔';
	}

	return [
			[ autoRun.Red1, "Robot 1 Auto Run", autoRun.Blue1 ],
			[ autoRun.Red2, "Robot 2 Auto Run", autoRun.Blue2 ],
			[ autoRun.Red3, "Robot 3 Auto Run", autoRun.Blue3 ],
			[ getScoreBreakdown_(matchData, "red")["autoRunPoints"],
					"Auto Run Points",
					getScoreBreakdown_(matchData, "blue")["autoRunPoints"] ] ];
}

function getScaleAuto2018_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["autoScaleOwnershipSec"],
			"Scale Ownership (seconds)",
			getScoreBreakdown_(matchData, "blue")["autoScaleOwnershipSec"] ];
}

function getSwitchAuto2018_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["autoSwitchOwnershipSec"],
			"Switch Ownership (seconds)",
			getScoreBreakdown_(matchData, "blue")["autoSwitchOwnershipSec"] ];
}

function getAutoOwnership2018_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["autoOwnershipPoints"],
			"Ownership Points",
			getScoreBreakdown_(matchData, "blue")["autoOwnershipPoints"] ];
}

function getScaleBoostTeleop2018_(matchData) {
	return [
			getScoreBreakdown_(matchData, "red")["teleopScaleOwnershipSec"]
					+ " + "
					+ getScoreBreakdown_(matchData, "red")["teleopScaleBoostSec"],
			"Scale Ownership + Boost (seconds)",
			getScoreBreakdown_(matchData, "blue")["teleopScaleOwnershipSec"]
					+ " + "
					+ getScoreBreakdown_(matchData, "blue")["teleopScaleBoostSec"] ];
}

function getSwitchBoostTeleop2018_(matchData) {
	return [
			getScoreBreakdown_(matchData, "red")["teleopSwitchOwnershipSec"]
					+ " + "
					+ getScoreBreakdown_(matchData, "red")["teleopSwitchBoostSec"],
			"Switch Ownership + Boost (seconds)",
			getScoreBreakdown_(matchData, "blue")["teleopSwitchOwnershipSec"]
					+ " + "
					+ getScoreBreakdown_(matchData, "blue")["teleopSwitchBoostSec"] ];
}

function getTeleopOwnership2018_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["teleopOwnershipPoints"],
			"Ownership Points",
			getScoreBreakdown_(matchData, "blue")["teleopOwnershipPoints"] ];
}

function getForceCubes2018_(matchData) {
	return [
			getScoreBreakdown_(matchData, "red")["vaultForceTotal"] + " ("
					+ getScoreBreakdown_(matchData, "red")["vaultForcePlayed"]
					+ ")",
			"Force Cubes Total (Played)",
			getScoreBreakdown_(matchData, "blue")["vaultForceTotal"] + " ("
					+ getScoreBreakdown_(matchData, "blue")["vaultForcePlayed"]
					+ ")" ];
}

function getLevitateCubes2018_(matchData) {
	return [
			getScoreBreakdown_(matchData, "red")["vaultLevitateTotal"]
					+ " ("
					+ getScoreBreakdown_(matchData, "red")["vaultLevitatePlayed"]
					+ ")",
			"Levitate Cubes Total (Played)",
			getScoreBreakdown_(matchData, "blue")["vaultLevitateTotal"]
					+ " ("
					+ getScoreBreakdown_(matchData, "blue")["vaultLevitatePlayed"]
					+ ")" ];
}

function getBoostCubes2018_(matchData) {
	return [
			getScoreBreakdown_(matchData, "red")["vaultBoostTotal"] + " ("
					+ getScoreBreakdown_(matchData, "red")["vaultBoostPlayed"]
					+ ")",
			"Boost Cubes Total (Played)",
			getScoreBreakdown_(matchData, "blue")["vaultBoostTotal"] + " ("
					+ getScoreBreakdown_(matchData, "blue")["vaultBoostPlayed"]
					+ ")" ];
}

function getVaultTotal2018_(matchData) {
	return [ getScoreBreakdown_(matchData, "red")["vaultPoints"],
			"Vault Total Points",
			getScoreBreakdown_(matchData, "blue")["vaultPoints"] ];
}

function getRobotEndgame2018_(matchData) {
	return [
			[ getScoreBreakdown_(matchData, "red")["endgameRobot1"],
					"Robot 1 Endgame",
					getScoreBreakdown_(matchData, "blue")["endgameRobot1"] ],
			[ getScoreBreakdown_(matchData, "red")["endgameRobot2"],
					"Robot 2 Endgame",
					getScoreBreakdown_(matchData, "blue")["endgameRobot2"] ],
			[ getScoreBreakdown_(matchData, "red")["endgameRobot3"],
					"Robot 3 Endgame",
					getScoreBreakdown_(matchData, "blue")["endgameRobot3"] ],
			[ getScoreBreakdown_(matchData, "red")["endgamePoints"],
					"Park/Climb Points",
					getScoreBreakdown_(matchData, "blue")["endgamePoints"] ] ];
}

function getAutoQuest2018_(matchData) {
	var autoQuest = {
		red : '✖',
		blue : '✖'
	};

	if (getScoreBreakdown_(matchData, "red")["autoQuestRankingPoint"]) {
		autoQuest.red = '✔';
	}
	if (getScoreBreakdown_(matchData, "blue")["autoQuestRankingPoint"]) {
		autoQuest.blue = '✔';
	}

	return [ autoQuest.red, "Auto Quest", autoQuest.blue ];
}

function getFaceBoss2018_(matchData) {
	var faceBoss = {
		red : '✖',
		blue : '✖'
	};

	if (getScoreBreakdown_(matchData, "red")["faceTheBossRankingPoint"]) {
		faceBoss.red = '✔';
	}
	if (getScoreBreakdown_(matchData, "blue")["faceTheBossRankingPoint"]) {
		faceBoss.blue = '✔';
	}

	return [ faceBoss.red, "Face The Boss", faceBoss.blue ];
}