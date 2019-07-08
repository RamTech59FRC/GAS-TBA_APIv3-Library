function rankings2018(eventKey) {
	var eventData = getEventRankings(eventKey, "", true);

	var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

	rankings = rankings.concat(getData2018_(eventData));

	rankings.push(getRecord_(eventData), getDQ_(eventData),
			getMatchesPlayed_(eventData));

	return transpose_(rankings);
}

function getData2018_(eventData) {
	var data = {
		rankScore : [ "Ranking Score" ],
		endGame : [ "Endgame" ],
		auto : [ "Auto" ],
		ownership : [ "Ownership" ],
		vault : [ "Vault" ]
	};

	var sortOrders = getRankings_(eventData, "sort_orders");

	data.rankScore = data.rankScore.concat(sortOrders.map(function(a) {
		return a[0]
	}));
	data.endGame = data.endGame.concat(sortOrders.map(function(a) {
		return a[1]
	}));
	data.auto = data.auto.concat(sortOrders.map(function(a) {
		return a[2]
	}));
	data.ownership = data.ownership.concat(sortOrders.map(function(a) {
		return a[3]
	}));
	data.vault = data.vault.concat(sortOrders.map(function(a) {
		return a[4]
	}));

	return [ data.rankScore, data.endGame, data.auto, data.ownership,
			data.vault ];
}