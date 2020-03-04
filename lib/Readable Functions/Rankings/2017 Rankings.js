function rankings2017(eventKey) {
	var eventData = getEventRankings(eventKey, "", true);

	var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

	rankings = rankings.concat(getData2017_(eventData));

	rankings.push(getRecord_(eventData), getDQ_(eventData),
			getMatchesPlayed_(eventData), getTotRankingPoints_(eventData));

	return transpose_(rankings);
}

function getData2017_(eventData) {
	var data = {
		rankScore : [ "Ranking Score" ],
		matchPoints : [ "Match Points" ],
		auto : [ "Auto" ],
		rotor : [ "Rotor" ],
		touchpad : [ "Touchpad" ],
		pressure : [ "Pressure" ]
	}

	var sortOrders = getRankings_(eventData, "sort_orders");

	data.rankScore = data.rankScore.concat(sortOrders.map(function(a) {
		return a[0]
	}));
	data.matchPoints = data.matchPoints.concat(sortOrders.map(function(a) {
		return a[1]
	}));
	data.auto = data.auto.concat(sortOrders.map(function(a) {
		return a[2]
	}));
	data.rotor = data.rotor.concat(sortOrders.map(function(a) {
		return a[3]
	}));
	data.touchpad = data.touchpad.concat(sortOrders.map(function(a) {
		return a[4]
	}));
	data.pressure = data.pressure.concat(sortOrders.map(function(a) {
		return a[5]
	}));

	return [ data.rankScore, data.matchPoints, data.auto, data.rotor,
			data.touchpad, data.pressure ];
}