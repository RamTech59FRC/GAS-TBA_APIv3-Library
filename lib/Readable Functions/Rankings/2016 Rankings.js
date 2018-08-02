function rankings2016(eventKey) {
	var eventData = getEventRankings(eventKey, "", true);

	var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

	rankings = rankings.concat(getData2016_(eventData));

	rankings.push(getRecord_(eventData), getDQ_(eventData),
			getMatchesPlayed_(eventData));

	return transpose_(rankings);
}

function getData2016_(eventData) {
	var data = {
		rankScore : [ "Ranking Score" ],
		auto : [ "Auto" ],
		scale : [ "Scale/Challenge" ],
		goals : [ "Goals" ],
		defense : [ "Defense" ]
	}

	var sortOrders = getRankings_(eventData, "sort_orders");

	data.rankScore = data.rankScore.concat(sortOrders.map(function(a) {
		return a[0]
	}));
	data.auto = data.auto.concat(sortOrders.map(function(a) {
		return a[1]
	}));
	data.scale = data.scale.concat(sortOrders.map(function(a) {
		return a[2]
	}));
	data.goals = data.goals.concat(sortOrders.map(function(a) {
		return a[3]
	}));
	data.defense = data.defense.concat(sortOrders.map(function(a) {
		return a[4]
	}));

	return [ data.rankScore, data.auto, data.scale, data.goals, data.defense ];
}