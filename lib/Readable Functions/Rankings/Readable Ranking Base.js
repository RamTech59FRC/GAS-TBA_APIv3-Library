/**
 * Returns the rankings of an event with the given event key. It will match the
 * event key to the right year to return the desired rankings
 * 
 * @param {String}
 *            eventKey - TBA Event Key
 * @returns {Array} TBA event rankings
 */
function getRankingReadable(eventKey) {
	switch (eventKey.substring(0, 4)) {
	case "2015":
		return rankings2015(eventKey);
		break;
	case "2016":
		return rankings2016(eventKey);
		break;
	case "2017":
		return rankings2017(eventKey);
		break;
	case "2018":
		return rankings2018(eventKey);
		break;
	/*
	 * case "2019": return rankings2019(eventKey); break;
	 */
	case "2020":
		return rankings2020(eventKey)
	default:
		return "Current case does not exist. If you would like it to exist, submit an issue on GitHub.";
	}
}

function getRank_(eventData) {
	return [ "Rank" ].concat(getRankings_(eventData, "rank"));
}

function getTeamsRank_(eventData) {
	return [ "Team" ].concat(getRankings_(eventData, "team_key").toString()
			.replace(/frc/g, "").split(","));
}

function getRecord_(eventData) {
	var record = {
		win : getRankings_(eventData, "record").map(function(a) {
			return a["wins"]
		}),
		loss : getRankings_(eventData, "record").map(function(a) {
			return a["losses"]
		}),
		tie : getRankings_(eventData, "record").map(function(a) {
			return a["ties"]
		})
	}

	return [ "W-L-T" ].concat(record.win.map(function(rec, i) {
		return rec + " - " + record.loss[i] + " - " + record.tie[i]
	}));
}

function getMatchesPlayed_(eventData) {
	return [ "Matches Played" ]
			.concat(getRankings_(eventData, "matches_played"));
}

function getDQ_(eventData) {
	return [ "DQ" ].concat(getRankings_(eventData, "dq"))
}

function getRankings_(eventData, header) {
	return eventData["rankings"].map(function(a) {
		return a[header]
	});
}

function getTotRankingPoints_(eventData) {
	return [ "Total Ranking Points" ]
		.concat(getRankings_("extra_stats").map(function(a) {
		return a[0]
	}))
}

function transpose_(a) {
	return Object.keys(a[0]).map(function(c) {
		return a.map(function(r) {
			return r[c];
		});
	});
}