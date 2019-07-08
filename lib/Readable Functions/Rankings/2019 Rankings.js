function rankings2019(eventKey) {
	var eventData = getEventRankings(eventKey, "", true);

	var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

	rankings = rankings.concat(getData2019_(eventData));

	rankings.push(getRecord_(eventData), getDQ_(eventData),
			getMatchesPlayed_(eventData));

	return transpose_(rankings);
}

function getData2019_(eventData) {
	var data = {
		rankScore : [ "Ranking Score" ],
		cargo : [ "Cargo" ],
		hatchPanel : ["Hatch Panel"],
		habClimb : ["HAB Climb"],
		sandstormBonus : ["Sandstorm Bonus"]
	};

	var sortOrders = getRankings_(eventData, "sort_orders");

	data.rankScore = data.rankScore.concat(sortOrders.map(function(a) {
		return a[0]
	}));
	data.cargo = data.cargo.concat(sortOrders.map(function(a) {
		return a[1]
	}));
	data.hatchPanel = data.hatchPanel.concat(sortOrders.map(function(a) {
		return a[2]
	}));
	data.habClimb = data.habClimb.concat(sortOrders.map(function(a) {
		return a[3]
	}));
	data.sandstormBonus = data.sandstormBonus.concat(sortOrders.map(function(a) {
		return a[4]
	}));

	return [ data.rankScore, data.cargo, data.hatchPanel, data.habClimb,
			data.sandstormBonus ];
}