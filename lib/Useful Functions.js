function getTeamNameNum(eventCode) {
	var teamNums = getEventTeams(eventCode, "team_number");
	var teamNames = getEventTeams(eventCode, "nickname");

	var teamData = [];

	for (var i = 0; i < teamNums.length; i++) {
		if (i != 0) {
			teamData.push([ parseInt(teamNums[i].toString()),
					teamNames[i].toString() ]);
		} else {
			teamData.push([ teamNums[i].toString(), teamNames[i].toString() ]);
		}

	}

	teamData.sort(function(x, y) { // sort on first column
		var xp = x[0];
		var yp = y[0];
		return xp < yp ? -1 : xp > yp ? 1 : 0;// return 0 if equal, 1 if > and
		// -1 if <
	});

	return teamData;
}

function toStringArray(singleStringArr) {
	if (singleStringArr[0][0].length === 0) {
		return singleStringArr[1].toString().split(",");
	} else {
		return singleStringArr;
	}
}

function getTeamsByState(fullName, abbr) {
	var temp = getTeamsSimple(0);
	var teams = [];
	var stateIndex = 0;
	for (var i = 0; temp[0].length > 1; i++) {
		temp = getTeamsSimple(i);
		for (var j = 0; j < temp[0].length; j++) {
			if (temp[0][j].toString() === "State Prov") {
				stateIndex = j;
			}
		}

		teams = teams.concat(temp.filter(function(state) {
			if (state.indexOf(fullName) > -1 || state.indexOf(abbr) > -1) {
				return state;
			}
		}));
	}

	return teams;
}

function isActive(teamKey) {

	var years = toStringArray(getYearsParticipated(teamKey));

	if (years[years.length - 1] === getStatus("max_season")[1].toString()) {
		return "Active";
	} else {
		return "In-active";
	}
}